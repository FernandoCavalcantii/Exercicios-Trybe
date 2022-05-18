// 1- Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .

// const simpsonsJson = require("./simpsons.json");
// const printer = (object) => {
//   const promise = new Promise((res, rej) => {
//     if (typeof object !== "object")
//       rej(new Error("Dado passado não é um objeto."));
//     const result = [];
//     for (let i = 0; i < object.length; i += 1) {
//       result.push(`${object[i].id} - ${object[i].name}`);
//     }
//     res(result.map((el) => console.log(el)));
//   });
//   return promise;
// };

// printer(simpsonsJson)
//   .then((result) => result)
//   .catch((err) => console.log(err.message));

// 2-  Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

// const simpsonsJson = require("./simpsons.json");
// const printer = (id) => {
//   const promise = new Promise((res, rej) => {
//     const result = simpsonsJson.find((el) => el.id === String(id));
//     console.log(result);
//     if (result === undefined) rej(new Error("id não encontrado"));

//     res(result);
//   });
//   return promise;
// };

// printer(3)
//   .then((result) => result)
//   .catch((err) => console.log(err.message));

// 3- Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// const simpsonsJson = require("./simpsons.json");
// const printer = (jsonObj) => {
//   const promise = new Promise((res, rej) => {
//     const result = jsonObj
//       .filter((el) => el.id !== "6")
//       .filter((el) => el.id !== "10");
//     res(result);
//   });
//   return promise;
// };

// printer(simpsonsJson)
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err.message));

// 4- Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

// const simpsonsJson = require("./simpsons.json");
// const printer = (jsonObj) => {
//   const promise = new Promise((res, rej) => {
//     const result = jsonObj.filter((el) => el.id < 5);
//     res(result);
//   });
//   return promise;
// };

// printer(simpsonsJson)
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err.message));

// 5- Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

// const simpsonsJson = require("./simpsons.json");
// const addChar = (jsonObj) => {
//   const promise = new Promise((res, rej) => {
//     jsonObj.push({ id: "11", name: "Nelson Muntz" });
//     res(jsonObj);
//   });
//   return promise;
// };

// addChar(simpsonsJson)
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err.message));

// 6- Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

// const simpsonsJson = require("./simpsons.json");

// const changeChar = (jsonObj, char, sub) => {
//   const promise = new Promise((res, rej) => {
//     const charInfo = jsonObj.find((el) => el.name.includes(char));
//     const result = jsonObj;
//     result[charInfo.id - 1] = { id: charInfo.id, name: sub };
//     res(result);
//   });
//   return promise;
// };

// changeChar(simpsonsJson, "Nelson Muntz", "Magie Simpson")
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err.message));
