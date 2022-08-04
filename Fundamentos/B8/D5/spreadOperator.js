// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Banana', 'Melancia', 'Limão'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Leite', 'Açucar'];

// const fruitSalad = (fruit, additional) => {
//   // Esreva sua função aqui
//   return [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// Faça uma lista com as suas frutas favoritas
// ------------------------------------------- \\

const specialFruit = ['Banana', 'Goiaba', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Pão', 'Carne', 'Queijo'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

// console.log(fruitSalad(specialFruit, additionalItens));

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.