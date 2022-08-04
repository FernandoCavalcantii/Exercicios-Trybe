const readline = require("readline-sync");

const input = readline.questionInt(
  "Insira um número para realizar seu fatorial "
);

if (input === 0) {
  console.log("Número não pode ser 0");
} else {
  const numbersArray = [];
  let i = 1;
  while (i <= input) {
    numbersArray.push(i);
    i += 1;
  }
  const result = numbersArray.reduce((a, b) => a * b);
  console.log(result);
}
