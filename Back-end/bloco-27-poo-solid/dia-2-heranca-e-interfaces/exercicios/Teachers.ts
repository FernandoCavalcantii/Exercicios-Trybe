import { Person } from "./Person";
import { math, Subject } from "./Subject";
import Employee from "./Employee";

export class Teacher extends Person implements Employee {
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;
  private _subject: Subject;

  constructor(name: string, salary: number, subject: Subject, admissionDate: Date) {
    super(name);

    this._registration = this.generateRegistration();
    this._salary = salary;
    this._subject = subject;
    this._admissionDate = admissionDate;

  }

  generateRegistration(): string {
    const registration = Math.floor(Math.random() * 1000000000000000);
    return registration.toString();
  }

  set registration(reg: string) {
    if (reg.length < 15) throw new Error('Register must contain at least 15 characters');
    this._registration = reg;
  }

  get registration() {
    return this._registration;
  }

  get salary() {
    return this._salary;
  }

  set salary(sal: number) {
    if (sal < 0) throw new Error(`Salary can't be less than 0`);
    this._salary = sal;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(date: Date) {
    const timeDiff = Date.now() - new Date(date).getTime();
    if (timeDiff > 0) throw new Error('Date cannot be in the future');
    this._admissionDate = date;
  }

  get subject() {
    return this._subject.name;
  }
}

const teacher1 = new Teacher('Fernando', 5000, math, new Date('2020-28-03'));
teacher1.birthdate = new Date('1995-03-28');
console.log(teacher1.age);
console.log(teacher1.subject);