const readline = require("readline-sync");

const distancia = readline.questionInt("Qual a distância em metros? ");
const tempo = readline.questionInt("Qual o tempo em segundos? ");

const velocidadeMedia = distancia / tempo;

console.log(`Velocidade Média: ${velocidadeMedia}m/s`);
