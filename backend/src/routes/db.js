const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'front_back'
});

connection.connect((err) => {
    if (err) {
        console.error('erro ao realizar conexão com o BD', err);
        throw err;
    }

    console.log('Conexão com BD estabelecida com sucesso!');
});

module.exports = connection;