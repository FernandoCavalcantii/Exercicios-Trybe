// {
//   "development": {
//     "username": "root",
//     "password": "docker",
//     "database": "associations",
//     "host": "associations_db",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }

module.exports = {
  development: {
    username: 'root',
    password: 'docker',
    database: 'associations',
    host: 'associations_db',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'docker', // preencha com a senha do seu banco de dados, caso tenha
    database: 'associations_test_db',
    host: 'associations_db',
    dialect: 'mysql',
    // adicione essa linha a sua configuração para omitir mensagens de log no orm
    logging: false,
  },
};
