<?php
$allowed_domains = ['reislucasf.com.br', 'aco.reislucasf.com.br'];
$referer = $_SERVER['HTTP_REFERER'] ?? '';

$domain_valid = false;
foreach ($allowed_domains as $domain) {
    if (strpos($referer, $domain) !== false) {
        $domain_valid = true;
        break;
    }
}

if (!$domain_valid) {
    http_response_code(403);
    echo json_encode(['error' => 'Acesso negado']);
    exit;
}

require './vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

header('Content-Type: application/json');

$apiKey = $_ENV['API_KEY'] ?? 'Chave não encontrada';

echo json_encode(['apiKey' => $apiKey]);
?>
