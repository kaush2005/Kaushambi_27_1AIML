const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3008;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
let products = [
  { id: 1, name: 'Wireless Headphones', price: 1999, rating: 4.5 },
  { id: 2, name: 'Mechanical Keyboard', price: 3499, rating: 4.7 },
  { id: 3, name: 'Gaming Mouse', price: 999, rating: 4.2 }
];
let nextId = 4;
app.get('/api/products', (req, res) => res.json(products));
app.post('/api/products', (req, res) => {
  const name = String(req.body.name || '').trim();
  const price = Number(req.body.price);
  const rating = Number(req.body.rating);
  if (!name || !Number.isFinite(price) || price <= 0 || !Number.isFinite(rating) || rating < 0 || rating > 5) {
    return res.status(400).json({ message: 'Enter a product name, positive price and rating from 0 to 5.' });
  }
  const product = { id: nextId++, name, price, rating };
  products.push(product);
  res.status(201).json({ message: 'Product added successfully.', product });
});
app.listen(PORT, () => console.log(`Q8 server running at http://localhost:${PORT}`));
