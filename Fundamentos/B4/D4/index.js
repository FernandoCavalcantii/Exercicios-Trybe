// Exercicio 1

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

let name = 'rosa';

let respota2 = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`;

console.log(respota2);

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player);

let resposta4 = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes.` 

console.log(resposta4);

let resposta5 = `A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`;

console.log(resposta5);