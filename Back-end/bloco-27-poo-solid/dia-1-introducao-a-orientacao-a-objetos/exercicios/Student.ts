class Student {
  private _registration: string;
  private _name: string;
  private _math: number;
  private _biology: number;
  private _physics: number;
  private _history: number;
  private _project: number;
  private _project2: number;

  constructor(
    _registration: string,
    _name: string,
    _math: number,
    _biology: number,
    _physics: number,
    _history: number,
    _project: number,
    _project2: number,
  ) {
    this._registration = _registration;
    this._name = _name;
    this._math = _math;
    this._biology = _biology;
    this._physics = _physics;
    this._history = _history;
    this._project = _project;
    this._project2 = _project2;
  }

  gradeSum() {
    return this._math + this._biology + this._history + this._physics + this._project + this._project2;
  }

  gradeAvg() {
    return (this._math + this._biology + this._history + this._physics + this._project + this._project2) / 6;
  }
}

const student: Student = new Student('123abc', 'Fernando', 10, 10, 10, 10, 10, 9);
console.log(student.gradeAvg());