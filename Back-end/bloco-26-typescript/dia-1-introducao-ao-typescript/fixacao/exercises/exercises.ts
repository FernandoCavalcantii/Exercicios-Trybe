// ./exercises.ts

export function greeter(name: string) {
    return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, height: number): number {
    return base * height;
}

export const losangle = (bigDiag: number, smallDiag: number):number => {
 return (bigDiag * smallDiag) / 2;
}

export function trapeze(bigBase: number, smallBase: number, height: number): number {
    return (height * (bigBase + smallBase)) / 2;
}