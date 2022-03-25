const emailListInData = [
  "roberta@email.com",
  "paulo@email.com",
  "anaroberta@email.com",
  "fabiano@email.com",
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
//   emailListInData.forEach(showEmailList);

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (num) => {
  // Adiciona seu código aqui
  return num % 5 === 0 && num % 3 === 0;
};

const answer = numbers.find(findDivisibleBy3And5);
// console.log(answer);

// 2 -

const names = ["João", "Irene", "Fernando", "Maria"];

const findNameWithFiveLetters = (el) => {
  return el.length ===  5;
};

const answer2 = names.find(findNameWithFiveLetters);
// console.log(answer2);

// 3 -

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
	return id.id === '31031685';
}

const answer3 = musicas.find(findMusic);
console.log(answer3);
