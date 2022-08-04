const connection = require("./connection");

const userObject = ({ id, firstName, lastName, email }) => {
  return { id, firstName, lastName, email };
};

const getAll = async () => {
  const query = "SELECT id, firstName, lastName, email FROM Users_DB.Users";
  const [users] = await connection.execute(query);

  if (users.length === 0) return [];

  return users.map(userObject);
};

const findById = async (id) => {
  const query =
    "SELECT id, firstName, lastName, email FROM Users_DB.Users WHERE id = ?";
  const [user] = await connection.execute(query, [id]);

  if (user.length === 0)
    throw { error: true, message: "Usuário não encontrado" };

  return user;
};

const isValid = (firstName, lastName, email, password) => {
  if (
    firstName === undefined ||
    firstName.length === 0 ||
    typeof firstName !== "string"
  )
    throw {
      error: true,
      message: "O campo 'firstName' é obrigatório",
    };
  if (
    lastName === undefined ||
    lastName.length === 0 ||
    typeof lastName !== "string"
  )
    throw {
      error: true,
      message: "O campo 'lastName' é obrigatório",
    };
  if (email === undefined || email.length === 0 || typeof email !== "string")
    throw {
      error: true,
      message: "O campo 'email' é obrigatório",
    };
  if (
    password === undefined ||
    typeof password !== "string" ||
    password.length < 6
  )
    throw {
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    };

  return true;
};

const create = async (firstName, lastName, email, password) => {
  const query =
    "INSERT INTO Users_DB.Users (firstName, lastName, email, password) VALUES (?,?,?,?)";
  const [newUser] = await connection.execute(query, [
    firstName,
    lastName,
    email,
    password,
  ]);
  return userObject({ id: newUser.insertId, firstName, lastName, email });
};

const updateUser = async (firstName, lastName, email, password, id) => {
  const query =
    "UPDATE Users_DB.Users SET firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?;";
  const [updatedUser] = await connection.execute(query, [
    firstName,
    lastName,
    email,
    password,
    id,
  ]);
  if (updatedUser.length === 0)
    throw { error: true, message: "Usuário não encontrado" };
  return userObject({ id: parseInt(id), firstName, lastName, email });
};

module.exports = {
  getAll,
  findById,
  isValid,
  create,
  updateUser,
};
