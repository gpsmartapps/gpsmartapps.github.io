const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'OgwoGP',
  password: 'Gmail9k66',
  database: 'w3bece'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});
