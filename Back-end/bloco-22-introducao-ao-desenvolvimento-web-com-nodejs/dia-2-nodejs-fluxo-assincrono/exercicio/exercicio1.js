// 1 - Crie uma função que recebe três parâmetros retorna uma Promise .

// 1.1 Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// 1.2 Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// 1.3 Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// 1.4 Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const calculator = (num, num2, num3) => {
  const promise = new Promise((res, rej) => {
    if (
      typeof num !== "number" ||
      typeof num2 !== "number" ||
      typeof num3 !== "number"
    ) {
      rej(new Error("Informe apenas números"));
    }

    const result = (num + num2) * num3;

    if (result < 50) rej(new Error("Valor muito baixo"));

    res(result);
  });
  return promise;
};

module.exports = calculator;

calculator(1, 3, "a")
  .then((result) => console.log(`Resultado igual a ${result}`))
  .catch((err) => console.error(`${err}`));
