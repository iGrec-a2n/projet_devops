<?php

class Database {
    private $host = 'db';
    private $dbname = 'shopping_db';
    private $username = 'postgres';
    private $password = 'postgres';
    private $db;

    public function connect() {
        if ($this->db === null) {
            $dsn = "pgsql:host={$this->host};dbname={$this->dbname}";
            $this->db = new PDO($dsn, $this->username, $this->password);
        }
        return $this->db;
    }
}
