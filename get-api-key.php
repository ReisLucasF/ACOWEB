<?php
require './vendor/autoload.php';

// Verifica se o acesso é de localhost
if ($_SERVER['REMOTE_ADDR'] !== '127.0.0.1') {
    header('HTTP/1.0 403 Forbidden');
    echo json_encode(['error' => 'Acesso negado']);
    exit;
}

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

header('Content-Type: application/json');

$apiKey = $_ENV['API_KEY'] ?? 'Chave não encontrada';

echo json_encode(['apiKey' => $apiKey]);
?>