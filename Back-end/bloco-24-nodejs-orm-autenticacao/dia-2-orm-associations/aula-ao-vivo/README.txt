Passo a passo do que fazer quando recebemos um código com um Banco de Dados utilizando Sequelize. 

Usamos:
    npx sequelize-cli db:drop && npx sequelize-cli db:create

    npx sequelize-cli db:migrate

    npx sequelize-cli db:seed:all

** Para automatizar: vide package.json, "scripts": {
    ...,
    "pre:start": npx sequelize-cli db:drop && npx sequelize-cli db:create npx sequelize-cli db:migrate npx sequelize-cli db:seeder:all
    ...,
}