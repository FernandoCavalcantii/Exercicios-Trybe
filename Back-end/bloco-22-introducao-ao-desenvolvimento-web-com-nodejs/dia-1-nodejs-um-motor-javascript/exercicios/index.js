const readline = require("readline-sync");

const scripts = {
  adivinhacao: "./adivinhacao/sorteio.js",
  imc: "./imc/imc.js",
  velocidadeMedia: "./velocidade-media/velocidade.js",
};

console.table(["adivinhacao", "imc", "velocidade-media"]);
const chooseScript = readline.questionInt("Rodar qual script? ");

if (chooseScript === 0) {
  require(scripts.adivinhacao);
} else if (chooseScript === 1) {
  require(scripts.imc);
} else if (chooseScript === 2) {
  require(scripts.velocidadeMedia);
} else {
  console.log("Número inválido");
}
