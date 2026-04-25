const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // change if you use a different username
  password: '',           // your MySQL root password
  database: 'bookstore'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ Connected to MySQL database');
});

module.exports = db;
