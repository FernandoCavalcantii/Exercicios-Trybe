require('dotenv').config();

const config = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: process.env.MYSQL_DATABASE,
  },
  test: {
    ...config,
    database: process.env.MYSQL_DATABASE,
  },
  production: {
    ...config,
    database: process.env.MYSQL_DATABASE,
  },
};
