<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SaveTheDateController extends AbstractController
{
    #[Route('/', name: 'app_save_the_date')]
    public function index(): Response
    {
        return $this->render('save_the_date/index.html.twig', [
            'controller_name' => 'SaveTheDateController',
        ]);
    }
}
