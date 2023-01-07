<?php
namespace Deployer;

require 'recipe/symfony.php';

// Config

set('repository', 'git@github.com:MikahDev/wedding-website.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('195.15.243.46')
    ->set('remote_user', 'debian')
    ->set('deploy_path', '/var/www/laura-et-mikah.fr');

// Hooks
after('deploy:vendors', 'database:migrate');
after('deploy:failed', 'deploy:unlock');
