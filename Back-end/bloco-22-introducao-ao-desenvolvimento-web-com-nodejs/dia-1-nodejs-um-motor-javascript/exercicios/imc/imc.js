const readline = require("readline-sync");

const peso = readline.questionInt("Qual seu peso? ");
const altura = readline.questionFloat("Qual sua altura? ");

const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
  console.log(`Você pesa: ${imc.toFixed(2)} - Abaixo do peso (magreza)`);
}

if (imc >= 18.5 && imc <= 24.9) {
  console.log(`Você pesa: ${imc.toFixed(2)} - Peso normal`);
}

if (imc >= 25 && imc <= 29.9) {
  console.log(`Você pesa: ${imc.toFixed(2)} - Acima do peso (sobrepeso)`);
}

if (imc >= 30 && imc <= 34.9) {
  console.log(`Você pesa: ${imc.toFixed(2)} - Obesidade grau I`);
}

if (imc >= 35 && imc <= 39.9) {
  console.log(`Você pesa: ${imc.toFixed(2)} - Obesidade grau II`);
}

if (imc >= 40) {
  console.log(`Você pesa: ${imc.toFixed(2)} - Obesidade graus III e IV`);
}
