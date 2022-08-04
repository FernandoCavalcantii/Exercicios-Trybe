// 2- Escreva um código para consumir a função construída no exercício anterior.
//
// 2.1 Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// 2.2 Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// 2.3 Utilize then e catch para manipular a Promise retornada pela função:
// 2.3.1 Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// 2.3.2 Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

const calculator = require("./exercicio1");

const random = () => Math.floor(Math.random() * 100 + 1);

const randomCalculator = () => {
  const randomNumbers = Array.from({ length: 3 }).map(random);
  calculator(...randomNumbers)
    .then((result) => console.log(`Resultado: ${result}`))
    .catch((err) => console.error(`Erro: ${err}`));
};

randomCalculator();
