<?php

namespace App\Controller;

use App\Entity\Book;
use App\Entity\Reservation;
use App\Repository\BookRepository;
use App\Repository\ReservationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CatalogueController extends AbstractController
{
    /**
     * @Route("/catalogue", name="catalogue")
     * @IsGranted("ROLE_USER")
     */
    public function index(BookRepository $bookRepository): Response
    {
        $user = $this->getUser();

        if(!$user->getUserValidated())
        {
            return $this->render('home/userUnValidated.html.twig',  []);
        }

        return $this->render('catalogue/index.html.twig', [
            'books' => $bookRepository->findAll()
        ]);
    }

    /**
     * @Route("/borrow", name="borrow")
     * @IsGranted("ROLE_USER")
     */
    public function borrow(ReservationRepository $reservationRepository): Response
    {
        $user = $this->getUser();
        return $this->render('catalogue/borrowed.html.twig', [
            'reservations' => $reservationRepository->findBy(['user'=>$user])
        ]);
    }

    /**
     * @Route("/catalogue/{id}", name="editBook")
     */
    public function show(Book $book): Response
    {
        return $this->render('catalogue/edit.html.twig', [
            'book' => $book
        ]);
    }


    /**
     * Permet de reserver un livre
     *
     * @Route("/catalogue/{id}/reserve", name="reserveBook")
     *
     * @param Book $book
     * @param EntityManagerInterface $manager
     * @param ReservationRepository $reservationRepository
     * @return Response
     */
    public function reserveBook(Book $book, EntityManagerInterface $manager, ReservationRepository $reservationRepository) : Response
    {
        $user = $this->getUser();

        if(!$user) return $this->json([
            'code' => 403,
            'message' => "Non autorisé"
        ], 403);

        // if($book->isReservedByUser($user)) {
        $resa = $reservationRepository->findOneBy([
            'book' => $book,
            'user' => $user
        ]);
        if($resa) {

            $manager->remove($resa);
            $book->setIsReserved(false);
            $manager->flush();

            return $this->redirectToRoute('catalogue');
        }

        $reservation = new Reservation();
        $reservation->setBook($book)
            ->setUser($user)
            ->setReservedDate(new \DateTime('now'));
        $manager->persist($reservation);

        $book->setIsReserved(true);

        $manager->flush();

        return $this->redirectToRoute('catalogue');
    }
}
