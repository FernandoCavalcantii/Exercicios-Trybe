const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

//   const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  return books.map(el => {
      return el.author.name;
  }).reduce((a,b) => {
      return a.concat(', ',b);
  });
};

// console.log(reduceNames());

// const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  const ages = books.map(el => {
      return el.releaseYear - el.author.birthYear;
  });
  
  return ages.reduce((a,b) => a + b) / ages.length
};

// console.log(averageAge());

// const expectedResult = {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
// //   };
  
  function longestNamedBook() {
    // escreva seu código aqui
    return books.reduce((a,b) => {
        return a.name.length > b.name.length ? a : b;
    });
  };

//   console.log(longestNamedBook());

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    let counter = 0;
    const answer = names.map(el => {
       return el.toLowerCase().split('');
    });
    for (let i = 0; i < answer.length; i += 1) {
        for (let j = 0; j < answer[i].length; j += 1) {
            if (answer[i][j] === 'a') {
                counter += 1;
            }
        }
    }

    return counter;
  };

//   console.log(containsA());

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const avarage1 = grades[0].reduce((a,b) => {
      return (a + b);
  }) / grades[0].length;
  const avarage2 = grades[1].reduce((a,b) => {
      return (a + b);
  }) / grades[1].length;
  const avarage3 = grades[2].reduce((a,b) => {
    return (a + b);
}) / grades[2].length; 

const avarage = [];
const avarages = avarage.concat(avarage1, avarage2, avarage3);
let answer = [];

for (let i = 0; i < students.length; i += 1) {
    answer.push({name: students[i], avarage: avarages[i]});
}
return answer;
}

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

console.log(studentAverage());