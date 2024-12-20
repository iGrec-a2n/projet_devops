const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/items", (req, res) => {
    res.json([
        { id: 1, name: 'Pineapples', quantity: 1 },
        { id: 2, name: 'Kiwi', quantity: 7 },    
    ])
});

app.post('/api/items', (req, res) => {
    const newItem = req.body;
    res.status(201).json({ message: 'Item added successfully', item: newItem });
});

app.listen(PORT, () => console.log(`Le server tourne sur http://localhost:${PORT}`));