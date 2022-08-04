// Reescreva o código do exercício anterior (calculator) para que utilize async/await .

// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

// Transformar callDoMath em uma async function

const calculator = require("./exercicio1");

const random = () => Math.floor(Math.random() * 100 + 1);

const randomCalculator = async () => {
  try {
    const randomNumbers = Array.from({ length: 3 }).map(random);

    const result = await calculator(...randomNumbers);

    console.log(`Resultado: ${result}`);
  } catch (err) {
    console.error(err.message);
  }
};

randomCalculator();
