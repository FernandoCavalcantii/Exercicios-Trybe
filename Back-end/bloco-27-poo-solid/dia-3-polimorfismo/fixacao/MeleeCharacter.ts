import Character from "./Character";

export default class MeleeCharacter extends Character {
  talk() {
    console.log('Olá de perto');
  }

  specialMove() {
    console.log('Hadouken!');
  }
}


