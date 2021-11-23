<?php

namespace App\Controller\Admin;

use App\Entity\Reservation;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ReservationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Reservation::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('book.title')->setLabel('Titre du livre'),
            TextField::new('user.prenom')->setLabel('Nom de l\'inscrit')->setDisabled(),
            DateField::new('reserved_date')->setLabel('Date de réservation')->setDisabled(),
            DateField::new('borrowed_date')->setLabel('Date d\'emprunt')->hideOnForm(),
            BooleanField::new('book.isBorrowed')->setLabel('Livre emprunté')
        ];
    }
}
