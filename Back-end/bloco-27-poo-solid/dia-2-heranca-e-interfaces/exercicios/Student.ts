import { Person } from "./Person";

class Student extends Person {
  private _registration: string;
  private _examGrades: number[];
  private _workGrades: number[];

  constructor(
    name: string,
    examGrades: number[],
    workGrades: number[],
  ) {

    super(name)

    const registration = Math.floor(Math.random() * 1000000000000000);

    this._registration = registration.toString();
    this._examGrades = examGrades;
    this._workGrades = workGrades;
  }

  gradeSum() {
    return this._examGrades.reduce((a, c) => a + c) + this._workGrades.reduce((a, c) => a + c);
  }

  gradeAvg() {
    return (this._examGrades.reduce((a, c) => a + c) + this._workGrades.reduce((a, c) => a + c)) / 6;
  }

  set examGrades(grades: number[]) {
    if (grades.length > 4) throw new Error(`Student can't have more than 4 exam grades`);
    this._examGrades = grades;
  }

  get examGrades(): number[] {
    return this._examGrades;
  }

  set workGrades(grades: number[]) {
    if (grades.length > 2) throw new Error(`Student can't have more than 4 work grades`);
    this._workGrades = grades;
  }

  get workGrades(): number[] {
    return this._workGrades;
  }

  get registration() {
    return this._registration;
  }
}

const student1: Student = new Student('Fernando', [10, 10, 9, 9], [10, 10]);
const student2: Student = new Student('Lucas', [9, 9, 9, 9], [9, 9]);
const student3: Student = new Student('Nilo', [8, 8, 8, 8], [8, 8]);
const student4: Student = new Student('Filipe', [7, 7, 7, 7], [7, 7]);
const student5: Student = new Student('Leo', [6, 6, 6, 6], [6, 6]);


