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
  
  // 1 -

  // Adicione o código do exercício aqui:
  function authorBornIn1947(el) {
    // escreva aqui o seu código
    return el.author.birthYear === 1947;
  };

  const answer = books.find(authorBornIn1947);
  // console.log(answer);

  // 2 -
  function smallerName(el) {
    let nameBook;
    // escreva aqui o seu código
    if (nameBook === undefined) {
      nameBook = el.name;
    }
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  };

  const answer2 = books.forEach(smallerName);
  console.log(answer2);

  // else if (el.name.length < nameBook.length) {
  //   //   nameBook = el.name.length;
  //   // }