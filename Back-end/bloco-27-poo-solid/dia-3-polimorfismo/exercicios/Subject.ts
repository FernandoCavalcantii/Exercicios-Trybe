export class Subject {
  private _name: string;

  constructor(name: string) {
    if (name.length < 3) throw new Error('Name must be at least 3 characters long');
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    if (name.length < 3) throw new Error('Name must be at least 3 characters long');
    this._name = name;
  }
}

export const math = new Subject('Math');
export const hist = new Subject('Hist');
export const bio = new Subject('Bio');