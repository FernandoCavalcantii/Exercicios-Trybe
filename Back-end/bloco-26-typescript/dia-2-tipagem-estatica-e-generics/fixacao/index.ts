type bird = {
  wings: number,
  beak: number,
};

function aBird (bird: bird) {
  return bird;
}

const parrot = {
  wings: 2,
  beak: 1
};

const cat = {
  feet: 4,
  tail: 1,
}

aBird(parrot);

// aBird(cat);

type mathFunc = (a: number, b: number) => number;

type address = {
  street: string,
  number: number,
  city: string,
}

type phisicalState = 'liquid' | 'solid' | 'gaseous';

const agua: phisicalState = 'liquid';

type cpf = string | number;

const fernando: cpf = 12345;

type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';

interface Dog {
  _name: string,
  _breed: string,
  bark(str: string): void;
}

class Dog {
  constructor(name: string, breed: string) {
    this._name = name;
    this._breed = breed;
  }

  bark(str: string) {
    console.log(`${this._name} barks: ${str}!`);
  }
}

const dog1 = new Dog('Bob', 'Poodle');

// dog1.bark('Au Au!');

interface Flight {
  _number: number,
  _length: string,
  _passengers: number,
  info(): void;
}

class Flight {
  constructor(number: number, length: string, passengers: number) {
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

// flight1.info();

interface Disciplina {
  _nome: string,
  _professor: string[],
  _horario: string,
}

interface Modulo extends Disciplina {
  _nome: string,
  _professor: string[],
  _horario: string,
  _coordenador: string,
  info(): void,
}

class Modulo {
  constructor(nome: string, professor: string[], horario: string, coordenador: string) {
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