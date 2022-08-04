import Enrrolable from "./Enrollable";
import Person from "./Person";

export default class Employee extends Person implements Enrrolable {
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthdate: Date, salary: number, admissionDate: Date) {
    super(name, birthdate);
    this._enrollment = this.generateEnrollment();
    this._salary = salary;
    this._admissionDate = admissionDate;
  }

  get enrollment() {
    return this._enrollment;
  }

  get salary() {
    return this._salary;
  }


  set salary(sal: number) {
    this.validateSalary(sal);
    this._salary = sal;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(date: Date) {
    this.validateDate(date);
    this._admissionDate = date;
  }

  generateEnrollment(): string {
    return Math.floor(Math.random() * 1000000000000000).toString();
  }

  validateSalary(salary: number) {
    if (salary < 0) throw new Error('Salary must be greater than 0');
  }

  validateDate(date: Date) {
    const timeDiff = Date.now() - new Date(date).getTime();
    if (timeDiff < 0) throw new Error('Admission date cannot be in the future');
  }
}
