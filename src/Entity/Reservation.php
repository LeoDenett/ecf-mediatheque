<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ReservationRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ReservationRepository::class)
 */
class Reservation
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\OneToOne(targetEntity=Book::class, inversedBy="reservation", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $book;

    /**
     * @ORM\Column(type="date")
     */
    private $reserved_date;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $borrowed_date;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getBook(): ?Book
    {
        return $this->book;
    }

    public function setBook(Book $book): self
    {
        $this->book = $book;

        return $this;
    }

    public function getReservedDate(): ?\DateTimeInterface
    {
        return $this->reserved_date;
    }

    public function setReservedDate(\DateTimeInterface $reserved_date): self
    {
        $this->reserved_date = $reserved_date;

        return $this;
    }

    public function getBorrowedDate(): ?\DateTimeInterface
    {
        return $this->borrowed_date;
    }

    public function setBorrowedDate(\DateTimeInterface $borrowed_date): self
    {
        $this->borrowed_date = $borrowed_date;

        return $this;
    }
}
