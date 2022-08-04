"use strict";
function aBird(bird) {
    return bird;
}
const parrot = {
    wings: 2,
    beak: 1
};
const cat = {
    feet: 4,
    tail: 1,
};
aBird(parrot);
const agua = 'liquid';
const fernando = 12345;
class Dog {
    constructor(name, breed) {
        this._name = name;
        this._breed = breed;
    }
    bark(str) {
        console.log(`${this._name} barks: ${str}!`);
    }
}
const dog1 = new Dog('Bob', 'Poodle');
class Flight {
    constructor(number, length, passengers) {
        this._number = number;
        this._length = length;
        this._passengers = passengers;
    }
    info() {
        console.log(`
    Flight n.${this._number}. \n
    Estimated duration: ${this._length}. \n
    Number of passengers aboard: ${this._passengers}.`);
    }
}
const flight1 = new Flight(1562, '180 min', 300);
class Modulo {
    constructor(nome, professor, horario, coordenador) {
        this._nome = nome;
        this._professor = professor;
        this._horario = horario;
        this._coordenador = coordenador;
    }
    info() {
        console.log(`
    Disciplina: ${this._nome} \n
    Professores: ${this._professor} \n
    Horario: ${this._horario} \n
    Coordenador: ${this._coordenador}`);
    }
}
const backend = new Modulo('TypeScript', ['Thiago Mariotto', 'Lud'], 'AB', 'Roberto');
backend.info();
