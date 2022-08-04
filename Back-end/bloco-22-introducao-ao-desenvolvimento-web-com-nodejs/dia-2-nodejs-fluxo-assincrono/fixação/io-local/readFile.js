const fs = require("fs").promises;

const nomeDoArquivo = "meu-arquivo.txt";

fs.readFile(nomeDoArquivo, "utf8")
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(
      `Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`
    );
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });

// app.get("/talker", (req, res) => {
//   // if ((talkerJson = [])) return res.status(HTTP_OK_STATUS).send([]);

//   fs.readFile(fileName, "utf8")
//     .then((data) => {
//       const dataObj = JSON.parse(data);
//       res.status(HTTP_OK_STATUS).json(dataObj);
//     })
//     .catch((err) => {
//       console.error(
//         `Não foi possível ler o arquivo ${fileName}\n Error: ${err}`
//       );
//       process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//     });
// });
