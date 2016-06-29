<?php

namespace Villermen\Soundboard\Controller;

use Slim\Http\Request;
use Slim\Http\Response;
use Villermen\Soundboard\Controller;

class IndexController extends Controller
{
  public function indexAction(Request $request, Response $response, $arguments)
  {
    $container = $this->getContainer();

    return $container->view->render($response, 'index.twig', [
      'baseUrl' => $container->config['baseUrl'],
    ]);
  }
}
