const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mybase',
    password: ''
});

module.exports = pool.promise();