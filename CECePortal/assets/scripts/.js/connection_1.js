const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'me24',
    password: 'm324',
    database: 'w3bece', // Replace 'auth_db_name' with your actual database name
    authPlugins: {
        mysql_native_password: () => () => Buffer.from('password')  // Native authentication plugin
    }
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the MySQL database as id ' + connection.threadId);
});

// Close the connection
connection.end((err) => {
    if (err) {
        console.error('Error disconnecting from the database:', err.stack);
        return;
    }
    console.log('Disconnected from the MySQL database.');
});
