<?php
require './vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

header('Content-Type: application/json');

$apiKey = $_ENV['API_KEY'] ?? 'Chave não encontrada';

echo json_encode(['apiKey' => $apiKey]);
?>
