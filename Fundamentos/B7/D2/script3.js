const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const nightShift = (obj, key, value) => {

    const newObj = Object.assign({}, obj);
    newObj[key] = value;

    return newObj

  }

//   console.log( nightShift(lesson2, 'turno', 'noite') );

//   const objKeys = (obj) => {

//     return Object.keys(obj);

//   }

//  console.log( objKeys(lesson2) );

 const objLength = (obj) => {

    const objItens = Object.keys(obj);
    return objItens.length;

 }

//  console.log( objLength(lesson2) );

const objValues = (obj) => {

    return Object.values(obj);

}

// console.log( objValues(lesson2) );

const allLessons = Object.assign({
    lesson1,
    lesson2,
    lesson3
});

// console.log( allLessons );

const students = (obj) => {
    const objEntries = Object.entries(obj);
    const num1Students = objEntries[0][1]['numeroEstudantes'];
    const num2Students = objEntries[1][1]['numeroEstudantes'];
    const num3Students = objEntries[2][1]['numeroEstudantes'];
    return num1Students + num2Students + num3Students;
}

// console.log( students(allLessons) );

const getValueByNumber = (obj, n) => {
    const objEntries = Object.keys(obj);
    return obj[objEntries[n]];
}

// console.log( getValueByNumber(lesson1, 1) );

const checker = (obj, key, val) => {

    const objEntries = Object.entries(obj);
    const pair = [key, val];
    for (let i = 0; i < objEntries.length; i += 1) {
        if (pair[0] === objEntries[i][0] && pair[1] === objEntries[i][1]) {
            return true;
        }
    }
    return false;

}
 
console.log( checker(lesson1, 'numeroEstudantes', 20) );
