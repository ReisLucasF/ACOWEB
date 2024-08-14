<?php
require './vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Definir o cabeçalho de resposta como JSON
header('Content-Type: application/json');

// Obter a chave da API do .env
$apiKey = $_ENV['API_KEY'] ?? 'Chave não encontrada'; // Fallback se não existir

// Retornar a chave como JSON
echo json_encode(['apiKey' => $apiKey]);
?>
