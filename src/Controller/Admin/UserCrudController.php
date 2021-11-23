<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('prenom')->setLabel('Prénom')->setDisabled(),
            TextField::new('nom')->setLabel('Nom')->setDisabled(),
            TextField::new('email')->setLabel('E-mail')->setDisabled(),
            DateField::new('date_naissance')->setLabel('Date de naissance')->setDisabled(),
            TextField::new('adresse_postal')->setLabel('Adresse Postal')->hideOnIndex(),
            BooleanField::new('user_validated')->setLabel('Autorisé'),
        ];
    }
}
