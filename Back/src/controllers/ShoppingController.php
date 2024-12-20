<?php

class ShoppingController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllItems() {
        $query = $this->db->query('SELECT * FROM shopping_items');
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function addItem($name, $quantity) {
        $stmt = $this->db->prepare('INSERT INTO shopping_items (name, quantity) VALUES (:name, :quantity)');
        $stmt->execute(['name' => $name, 'quantity' => $quantity]);
        return $this->db->lastInsertId();
    }

    public function deleteItem($id) {
        $stmt = $this->db->prepare('DELETE FROM shopping_items WHERE id = :id');
        $stmt->execute(['id' => $id]);
    }
}
