// Flute.ts
export default class Flute {
  constructor(public name: string) {
    this.name = name;
  }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}