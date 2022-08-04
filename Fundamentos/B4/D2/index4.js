// exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let numeros of numbers) {
    console.log(numeros);
}

// exercicio 2

let sum = 0;

for (let i=0; i < numbers.length; i += 1) {
    sum += numbers[i];    
}

console.log(sum)

// exercicio 3

let mediaAritmetica = sum / numbers.length
console.log(mediaAritmetica);

// exercicio 4

if (mediaAritmetica > 20) {
    console.log('Valor maior que vinte');
} else {
    console.log('Valor menor ou igual a 20')
}

// exercicio 5

let maiorNum = 0;

for (let j=0; j < numbers.length; j += 1) {
    if (numbers[j] > maiorNum) {
        maiorNum = numbers[j];
    }
}

console.log(maiorNum);

// exercicio 6

let impares = 0;

for (let h=0; h < numbers.length; h += 1) {
    if (numbers[h] % 2 === 1) {
        impares++;
    }
}

if (impares !== 0) {
    console.log(impares);
} else {
    console.log('Nenhum valor encontrado');
}

// exercicio 7

let menorNum = 0;

for (let k=0; k < numbers.length; k += 1) {
    if (menorNum === 0) {
        menorNum = numbers[0];
    }

    if (menorNum > numbers[k]) {
        menorNum = numbers[k];
    }
}

console.log(menorNum);

// exercicio 8

let array = [];

for (let l=1; l <= 25; l++) {
    array.push(l);
}

console.log(array)

// exercicio 9

let divisaoArray = [];

for (let m=0; m < array.length; m++) {
    divisaoArray.push(array[m] / 2);
}

console.log(divisaoArray)