'use strict';
var Colors;
(function (Colors) {
  Colors['black'] = 'black';
  Colors['white'] = 'white';
  Colors['red'] = 'red';
  Colors['silver'] = 'silver';
})(Colors || (Colors = {}));
var FourDoors;
(function (FourDoors) {
  FourDoors['frontRight'] = 'Front right';
  FourDoors['frontLeft'] = 'Front left';
  FourDoors['backRight'] = 'Back right';
  FourDoors['backLeft'] = 'Back left';
})(FourDoors || (FourDoors = {}));
var Directions;
(function (Directions) {
  Directions['front'] = 'Front';
  Directions['right'] = 'Right';
  Directions['left'] = 'Left';
})(Directions || (Directions = {}));
class Car {
  constructor(brand, color, doors, speed) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
    this.speed = speed;
  }
  honk() {
    console.log('Bi bi!');
  }
  openTheDoor(door) {
    console.log(`Opened ${door} door.`);
  }
  closeTheDoor(door) {
    console.log(`Closed ${door} door.`);
  }
  turnOn() {
    console.log('Car turned on.');
  }
  turnOff() {
    console.log('Car turned off.');
  }
  speedUp() {
    this.speed + 10;
    console.log(`Accelerated to ${this.speed}.`);
  }
  speedDown() {
    this.speed - 10;
    console.log(`Desaccelerated to ${this.speed};.`);
  }
  stop() {
    console.log('Car stopped.');
  }
  turn(direction) {
    console.log(`Car turned ${direction}.`);
  }
}
const car = new Car('Volkswagen gol', Colors.silver, 4, 50);
function pickAndDeliver() {
  car.turnOn();
  car.turn(Directions.left);
  car.turn(Directions.right);
  car.turn(Directions.front);
  car.openTheDoor(FourDoors.backRight);
  car.closeTheDoor(FourDoors.backRight);
  car.turn(Directions.front);
  car.turn(Directions.right);
  car.openTheDoor(FourDoors.backRight);
  car.closeTheDoor(FourDoors.backRight);
  car.stop();
}
pickAndDeliver();
