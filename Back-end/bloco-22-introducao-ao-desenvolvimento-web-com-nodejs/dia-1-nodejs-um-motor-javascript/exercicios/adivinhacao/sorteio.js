const readline = require("readline-sync");

const palpite = readline.questionInt("Qual o número sorteado? ");

const sorteio = Math.round(Math.random() * 10);

if (palpite === sorteio) {
  console.log("Parabéns, número correto!");
} else {
  console.log(`Opa, não foi dessa vez. O número era ${sorteio}`);
}
