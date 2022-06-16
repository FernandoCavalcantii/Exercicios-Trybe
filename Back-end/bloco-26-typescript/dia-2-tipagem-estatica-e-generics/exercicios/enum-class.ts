enum Colors {
  black = 'black',
  white = 'white',
  red = 'red',
  silver = 'silver',
}

enum FourDoors {
  frontRight = 'Front right',
  frontLeft = 'Front left',
  backRight = 'Back right',
  backLeft = 'Back left',
}

enum Directions {
  front = 'Front',
  right = 'Right',
  left = 'Left',
}

class Car {
  brand: string;
  color: Colors;
  doors: number;
  speed: number;

  constructor(brand: string, color: Colors, doors: number, speed: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
    this.speed = speed;
  }

  honk() {
    console.log('Bi bi!');
  }

  openTheDoor(door: FourDoors) {
    console.log(`Opened ${door} door.`);
  }

  closeTheDoor(door: FourDoors) {
    console.log(`Closed ${door} door.`);
  }

  turnOn(): void {
    console.log('Car turned on.');
  }

  turnOff(): void {
    console.log('Car turned off.');
  }

  speedUp(): void {
    this.speed + 10;
    console.log(`Accelerated to ${this.speed}.`);
  }

  speedDown(): void {
    this.speed - 10;
    console.log(`Desaccelerated to ${this.speed};.`)
  }

  stop(): void {
    console.log('Car stopped.')
  }

  turn(direction: Directions) {
    console.log(`Car turned ${direction}.`)
  }
}



const car = new Car('Volkswagen gol', Colors.silver, 4, 50);

function pickAndDeliver () {
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
};

pickAndDeliver();