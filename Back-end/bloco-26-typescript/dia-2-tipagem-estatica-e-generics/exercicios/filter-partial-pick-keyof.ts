// type primitivesArray = (string | number | boolean)[];

// function myFilter<T>(arr: T, callback: Function) {
//   let result = [];
//   let i = 0;
//   while (i < arr.length) {

//   }
// }

// const arr = [1, 2, 3];
// const callback = () => console.log('a'); 
// const filter = myFilter<primitivesArray>(arr, callback);

type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter<number>([1, 2, 3], (item, index, array) => item < 3));

console.log(myFilter(["a", "b", "c"], (item, index, array) => {
  return item !== "a"
}));

// const array = [1, 2, 3, 4, 5];

// function forEach<T, R>(array: T[], callback: (v: T) => R) {
//   for (const v of array)
//     callback(v);
// }

// forEach(array, v => { console.log(v) })

// type Cor = "branco" | "preto" | "pardo"

// type Pessoa = {
//   nome: string,
//   idade: number,
//   cor: Cor
// };

// type Exemplo = keyof Pessoa;

// const exemplo: Exemplo = ""

// type PessoaComNome = Pick<Pessoa, "nome">;
// type PessoaSemNome = Pick<Pessoa, "idade" | "cor">;

// const pessoaComNome: PessoaComNome = { nome: "fernando" };
// const pessoaSemNome: PessoaSemNome = { idade: 25, cor: "preto" }

// const fernando: Pessoa = {
//   ...pessoaComNome,
//   ...pessoaSemNome
// }

// type PartialPessoa = Partial<Pessoa>;

// type Preços = {
//   [key: string]: number;
// };

// const preços: Preços = {};

// preços["bitcoin"] = 30000;
// preços["ethereum"] = 2000;

// let moeda = "USDT";

// if(preços[moeda]) {
//   console.log(preços[moeda])
// }
// else {
//   const preço:number = fetch();
//   preços[moeda] = preço;
// }