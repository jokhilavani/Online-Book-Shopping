const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

// Signup
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) return res.status(400).json({ message: 'Signup failed', error: err });
    res.json({ message: 'Signup successful', userId: result.insertId });
  });
});

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error logging in' });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login successful', userId: results[0].id });
  });
});
