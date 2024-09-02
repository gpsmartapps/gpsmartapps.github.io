const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'me24',
    password: 'm324',
    database: 'world', // Replace with your database name
    authPlugins: {
        mysql_native_password: () => () => Buffer.from('password')
    }
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// Sample API endpoint
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM your_table_name', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
