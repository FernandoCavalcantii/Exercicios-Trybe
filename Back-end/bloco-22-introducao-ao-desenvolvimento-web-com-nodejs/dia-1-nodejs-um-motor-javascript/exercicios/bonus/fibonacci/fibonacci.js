const readline = require("readline-sync");

const input = readline.questionInt(
  "Quantos elementos da sequência de fibonacci devem ser mostrados? "
);

if (input === 0) {
  console.log("Número não pode ser 0");
} else {
  const fibonacci = [1, 1];
  let i = 2;
  while (i < input) {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    );
    i += 1;
  }
  if (input === 1) {
    fibonacci.shift();
  }
  console.log(fibonacci.map((el) => el));
}
