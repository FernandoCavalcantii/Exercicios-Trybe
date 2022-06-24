import Character from "./Character";
import MeleeCharacter from "./MeleeCharacter";

export default class Rangeharacter extends Character {
  talk() {
    console.log('Olá de longe');
  }

  specialMove() {
    console.log('Shuryuken!');
  }
}

function func(char: Character) {
  char.talk();
  char.specialMove();
}

func(new MeleeCharacter);
func(new Rangeharacter);