const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  // Isso aqui serve para reaproveitar conexões com o msysql, a não ficamos abrindo conexão toda vez que for utilizar o mysql. Melhora o tempo de latência da conexão.
  user: "root",
  password: "docker",
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB_NAME,
});

module.exports = connection;
