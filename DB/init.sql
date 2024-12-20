CREATE USER shopping_user WITH PASSWORD 'password123';
GRANT ALL PRIVILEGES ON DATABASE shopping_app TO shopping_user;

CREATE TABLE IF NOT EXISTS shopping_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL
);

INSERT INTO shopping_items (name, quantity) VALUES 
('Apples', 3),
('Bananas', 5),
('Mangoes', 7)
ON CONFLICT DO NOTHING;
