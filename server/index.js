const express = require("express");
const cors = require("cors");
const { Pool } = require('pg'); 
require('dotenv').config();

const app = express();
const PORT = 4000;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

app.use(cors());
app.use(express.json());

app.get("/api/items", async (req, res) => {
    // res.json([
    //     { id: 1, name: 'Pineapples', quantity: 1 },
    //     { id: 2, name: 'Kiwi', quantity: 7 },    
    // ])
    try {
        const result = await pool.query('SELECT * FROM items');
        res.json(result.rows);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
      }    
});

app.post('/api/items', async (req, res) => {
    // const newItem = req.body;
    // res.status(201).json({ message: 'Item added successfully', item: newItem });
    const { name, quantity } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO items (name, quantity) VALUES ($1, $2) RETURNING *',
        [name, quantity]
      );
      res.status(201).json({ message: 'Item added successfully', item: result.rows[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Database error' });
    }
  
});

app.listen(PORT, () => console.log(`Le server tourne sur http://localhost:${PORT}`));