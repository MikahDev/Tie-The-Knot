<?php

namespace App\Controller;

use App\Entity\Guest;
use App\Form\GuestType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SaveTheDateController extends AbstractController
{
    #[Route('/', name: 'app_save_the_date')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $guest = new Guest();

        $form = $this->createForm(GuestType::class, $guest);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $guest = $form->getData();
            $entityManager->persist($guest);
            $entityManager->flush();

            return $this->redirectToRoute('app_save_the_date');
        }

        return $this->renderForm('save_the_date/index.html.twig', [
            'controller_name' => 'SaveTheDateController',
            'form' => $form,
        ]);
    }
}
