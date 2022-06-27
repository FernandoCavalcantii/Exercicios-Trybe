import { ICar } from "./interfaces";

// type ICar = Omit<ICar, 'fly'>;

class Car implements ICar {
    drive(): void { console.log('Drive a futuristic car'); }
}

export default Car;