import { Teacher } from "./Teachers";

export default class Evaluation {
  private _type: string;
  private _score: number;
  private _teacher: Teacher;

  constructor(type: string, score: number, teacher: Teacher) {
    this._type = type;
    this._score = score;
    this._teacher = teacher;
  }

  get type(): string {
    return this._type;
  }

  set type(t: string) {
    const types = ['prova', 'trabalho'];
    if (types.indexOf(t) === -1) throw new Error(`Types can only be 'prova' or 'trabalho'`);
    this._type = t;
  }

  get score(): number {
    return this._score;
  }

  set score(s: number) {
    if (s < 0) throw new Error('Score cannot be negative numbers');
    if (this._type === 'prova' && s > 25) throw new Error(`Type 'prova' cannot have a score bigger than 25`);
    if (this._type === 'trabalho' && s > 50) throw new Error(`Type 'trabalho' cannot have a score bigger than 50`);
    this._score = s;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(t: Teacher) {
    this._teacher = t;
  }
}

