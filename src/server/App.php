<?php

namespace Villermen\Soundboard;

use Symfony\Component\Yaml\Yaml;
use \Slim\App as SlimApp;

class App extends SlimApp
{
	const CONFIG_FILE_GLOBAL = 'config/server.global.yml';
  const CONFIG_FILE_LOCAL = 'config/server.local.yml';

	protected $config;

	public function __construct()
	{
		chdir(__DIR__ . '/../..');

		// Load configuration.
		$configGlobal = Yaml::parse(file_get_contents(self::CONFIG_FILE_GLOBAL));
    $configLocal = Yaml::parse(file_get_contents(self::CONFIG_FILE_LOCAL));
		$this->config = array_merge_recursive($configGlobal['server'], $configLocal['server']);

		// Actually create the app.
		parent::__construct($this->config['slim']);

    $container = $this->getContainer();

		// Add configuration and router to container.
		$container['config'] = $this->config;
		$container['router'] = new Router($this->getContainer());

    // Register Twig View helper
    $container['view'] = function ($c) {
      $view = new \Slim\Views\Twig(__DIR__ . '/../templates');

      // Instantiate and add Slim specific extension
      $basePath = rtrim(str_ireplace('index.php', '', $c['request']->getUri()->getBasePath()), '/');
      $view->addExtension(new \Slim\Views\TwigExtension($c['router'], $basePath));

      return $view;
    };
	}

	public function run($silent = false)
	{
		parent::run($silent);
	}
}
