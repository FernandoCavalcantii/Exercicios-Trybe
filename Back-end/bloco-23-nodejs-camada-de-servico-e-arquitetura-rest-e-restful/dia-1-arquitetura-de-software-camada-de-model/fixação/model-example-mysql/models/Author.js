const connection = require("./connection");

// Cria uma string com o nome completo da pessoa autora
const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" ");
  // Outro exemplo para filtrar :)
  // const fullName = [firstName, middleName, lastName]
  //           .filter(Boolean)
  //           .join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  };
};

// Busca todas as pessoas autoras do banco.
const getAll = async () => {
  // Se não desestruturar como abaixo "[authors]", o retorno virá com 2 elementos, o primeiro os autores que queremos e o segundo são metadados relacionados a query feita. [rows, fields] . O primeiro index é onde está a resposta que desejamos (no caso o authors) e no segundo vêm algumas informações extras sobre a query que não iremos utilizar.
  const [authors] = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM authors"
  );
  //   A função getNewAuthor recebe os dados brutos e transforma na informação que queremos, o nome completo da pessoa autora! Com isso não modificamos em nada nosso getAll , assim desacoplando a necessidade dela conhecer outras funções além da serialize.
  return authors.map(serialize).map(getNewAuthor);
};

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findById = async (id) => {
  // Repare que substituímos o id por `?` na query.
  // Depois, ao executá-la, informamos um array com o id para o método `execute`.
  // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
  const query =
    "SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?";
  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== "string") return false;
  if (!lastName || typeof lastName !== "string") return false;
  if (middleName && typeof middleName !== "string") return false;

  return true;
};

const create = async (firstName, middleName, lastName) =>
  connection.execute(
    "INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)",
    [firstName, middleName, lastName]
  );

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
