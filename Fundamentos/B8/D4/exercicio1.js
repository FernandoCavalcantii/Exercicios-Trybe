const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    const answer = arrays.reduce((a,b) => {
        return a.concat(b);
    })
    return answer;
  };

  console.log(flatten());