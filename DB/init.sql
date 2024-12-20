CREATE DATABASE shopping_db;

CREATE TABLE IF NOT EXISTS shopping_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL
);

INSERT INTO items (name, quantity) VALUES
('Apples', 3),
('Bananas', 5);