const mysql = require('mysql2/promise');

const connection = mysql.createPool({
// Isso aqui serve para reaproveitar conexões com o msysql, a não ficamos abrindo conexão toda vez que for utilizar o mysql. Melhora o tempo de latência da conexão.
  user: 'root',
  password: 'docker',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;