require('dotenv').config();

const sql = require('mssql');

const config = {
    user: process.env.DB_USER,
    server: process.env.DB_SERVER, 
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, // Usar true si estás usando Azure SQL
        enableArithAbort: true
    },
    port: parseInt(process.env.DB_PORT, 10)
};

sql.connect(config).then(pool => {
    // Ya estás conectado
}).catch(err => {
    console.error('Error connecting to the database: ', err);
});
