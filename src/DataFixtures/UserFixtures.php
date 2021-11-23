<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        //ADMIN
        $user = new User();
        $user->setEmail('leonel@leonel.com');
        $user->setPassword('$2y$10$iVRaSpQhZw9CdacLxmIelefyt43Ly27yNDUarw9/1YUIn5Z1uLXZi');//admin
        $user->setPrenom('Leonel');
        $user->setNom('Denett');
        $user->setDateNaissance(new \DateTime('01-09-1998'));
        $user->setAdressePostal('7 Rue Albert du Mun 29400');
        $user->setUserValidated(true);
        $user->setRoles(['ROLE_ADMIN']);

        $manager->persist($user);

        //EMPLOYEE
        $user = new User();
        $user->setEmail('raphi@raphi.com');
        $user->setPassword('$2y$10$4nJInvwr/f4IPsDGPfZ0..Je2biNJ8F2985TaocCjnYj1wJZxGN.6');//test
        $user->setPrenom('Raphaelle');
        $user->setNom('Poti');
        $user->setDateNaissance(new \DateTime('28-12-1997'));
        $user->setAdressePostal('7 Rue Albert du Mun 29400');
        $user->setUserValidated(true);
        $user->setRoles(['ROLE_EMPLOYEE']);

        $manager->persist($user);


        //USER (validated)
        $user = new User();
        $user->setEmail('dieguito@dieguito.com');
        $user->setPassword('$2y$10$4nJInvwr/f4IPsDGPfZ0..Je2biNJ8F2985TaocCjnYj1wJZxGN.6');//test
        $user->setPrenom('Dieguito');
        $user->setNom('Maradona');
        $user->setDateNaissance(new \DateTime('30-10-1960'));
        $user->setAdressePostal('Ayacucho 1916');
        $user->setUserValidated(true);
        $user->setRoles(['ROLE_USER']);

        $manager->persist($user);


        //USER (No validated)
        $user = new User();
        $user->setEmail('lio@lio.fr');
        $user->setPassword('$2y$10$4nJInvwr/f4IPsDGPfZ0..Je2biNJ8F2985TaocCjnYj1wJZxGN.6');//test
        $user->setPrenom('Lio');
        $user->setNom('Messi');
        $user->setDateNaissance(new \DateTime('24-06-1987'));
        $user->setAdressePostal('Conquista 2021');
        $user->setUserValidated(false);
        $user->setRoles(['ROLE_USER']);

        $manager->persist($user);



        $manager->flush();
    }
}
