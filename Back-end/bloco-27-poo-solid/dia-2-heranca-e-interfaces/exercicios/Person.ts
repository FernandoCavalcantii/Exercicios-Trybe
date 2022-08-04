export class Person {
  private _name: string;
  private _birthdate: Date = new Date('1970-01-01');
  private _age: number = 0;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (name.length < 3) throw new Error('Name must be at least 3 characters long');
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set birthdate(date: Date) {
    const timeDiff = Math.abs(
      Date.now() -
      new Date(date).getTime()
    );

    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    if (age > 120) throw new Error(`Age can't be greater than 120 years`);

    this._birthdate = date;
    this._age = age;
  }

  get birthdate() {
    return this._birthdate;
  }
}

const person1 = new Person('Fernando');
person1.birthdate = new Date('1995-03-28');

const person2 = new Person('Roberto');
person2.birthdate = new Date('1950-03-28');