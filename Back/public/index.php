<?php

require __DIR__ .'/src/config/Database.php';
require __DIR__ .'/src/controllers/ShoppingController.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$method = $_SERVER['REQUEST_METHOD'];
$db = (new Database())->connect();
$controller = new ShoppingController($db);

switch ($method) {
    case 'GET':
        echo json_encode($controller->getAllItems());
        break;
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $controller->addItem($data['name'], $data['quantity']);
        echo json_encode(['id' => $id]);
        break;
    case 'DELETE':
        parse_str(file_get_contents('php://input'), $data);
        $controller->deleteItem($data['id']);
        echo json_encode(['status' => 'success']);
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
}
