<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private $passwordHasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->passwordHasher = $hasher;
    }

    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $plainPassword = 'thevilleprats';

        $adminRoles[] = 'ROLE_ADMIN';

        $admin = new User();
        $admin->setEmail('thevilleprats@gmail.com');
        $admin->setUsername('mikah');
        $admin->setRoles($adminRoles);

        $hashedPassword = $this->passwordHasher->hashPassword(
            $admin,
            $plainPassword
        );
        
        $admin->setPassword($hashedPassword);
            
        $manager->persist($admin);

        $manager->flush();
    }
}
