import Person from "./Person";
import { math, Subject } from "./Subject";
import Employee from "./Employee";

export class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthdate: Date, salary: number, subject: Subject, admissionDate: Date) {
    super(name, birthdate, salary, admissionDate);

    this._subject = subject;
  }

  get subject() {
    return this._subject.name;
  }

  set subject(sub: string) {
    this._subject.name = sub;
  }
}
