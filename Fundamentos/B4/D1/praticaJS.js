// exercicio 1

function sum(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function mult(a,b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}
function remainder() {
    return a % b;
}

console.log(    sum(10,20), subtract(50,40)  )
// exercicio 2

// if (a > b) {
//     console.log(a)
// } else {
//     console.log(b)
// }

// // exercicio 3

// if (a > b && a > c) {
//     console.log(a)
// } else if (b > a && b > c) {
//     console.log(b)
// } else {
//     console.log(c)
// }

// // exercicio 4

// if (a > 0) {
//     console.log('positive')
// } else if (a === 0) {
//     console.log('zero')
// } else {
//     console.log('negative')
// }

// // exercicio 5

// let ang1 = 60;
// let ang2 = 60;
// let ang3 = 60;

// if (ang1 + ang2 + ang3 === 180) {
//     console.log('triângulo')
// } else {
//     console.log('error')
// }

// // exercicio 6

// let xadrez = 'Peão';

// switch (xadrez.toLowerCase()) {
//     case 'rei':
//         console.log("Anda 1 casa em qualquer direção.")
//         break;
//     case 'rainha':
//         console.log("Anda quantas casas quiser em qualquer direção.")
//         break;
//     case 'bispo':
//         console.log("Anda nas diagonais.")
//         break;
//     case 'torre':
//         console.log("Anda na vertical e horizontal.")
//         break;
//     case 'cavalo':
//         console.log("Anda em L.")
//         break;
//     case 'peão':
//         console.log("Anda 1 casa para frente.")
//         break;
//     default: 
//         console.log("Error")
// }

// // exercicio 7

// let nota = 95;

// if (nota >= 90 && 100 >= nota) {
//     console.log('A')
// } else if (nota < 90 && nota >= 80) {
//     console.log('B')
// } else if (nota < 80 && nota >= 70) {
//     console.log('C')
// } else if ( nota < 70 && nota >= 60) {
//     console.log('D')
// } else if (nota < 60 && nota >= 50) {
//     console.log('E')
// } else if (nota < 50 && nota >= 0) {
//     console.log('F')
// } else {
//     console.log('Error')
// }

// // exercicio 8

// const x = 5;
// const y = 1;
// const z = 3;

// if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// // exercicio 9

// const f = 5;
// const g = 6;
// const h = 7;

// if (f % 2 ===1 || g % 2 === 1 || h % 2 === 1) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// // exercicio 10

// let custo = 5;
// let venda = 10;


// let lucroMil = venda * 1000 - custo * 1000;
// let imposto = custo * 1000 * 0.2
// let lucro = lucroMil - imposto;

// if (custo < 0 || venda < 0) {
//     console.log('Error 0')
// } else {
//     console.log(lucro)
// }

// // exercicio 11

// let salario = 3000;
// let inss = 0;
// let ir = 0;

// if (salario <= 1556.94) {
//     inss = salario * 0.08;
// } else if (salario > 1556.94 && salario <= 2594.92) {
//     inss = salario * 0.09;
// } else if (salario > 2594.92 && salario <= 5189.82) {
//     inss = salario * 0.11;
// } else {
//     inss = 570,88;
// }

// let salarioBase = salario - inss;

// if (salarioBase <= 1903.98) {
//     ir = 0;
// } else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
//     ir = salarioBase * 0.075 - 142.80;
// } else if (salarioBase > 2826.65 && salarioBase <= 3751.06) {
//     ir = salarioBase * 0.15 -354.80;
// } else if (salarioBase > 3751.06 && salarioBase <= 4664.68) {
//     ir = salarioBase * 0.225 - 636.13;
// } else {
//     ir = salarioBase * 0.275 - 869.36
// }

// let salarioLiquido = salarioBase - ir;
// console.log(salarioLiquido)