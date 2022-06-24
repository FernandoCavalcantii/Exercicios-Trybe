import Enrrolable from "./Enrollable";
import Evaluation from "./Evaluation";
import EvaluationResult from "./EvaluationResult";
import Person from "./Person";

export default class Student extends Person implements Enrrolable {
  private _enrollment: string;
  private _evaluationResults: EvaluationResult[];

  constructor(
    name: string,
    birthdate: Date,
    evaluationResults: EvaluationResult[],
  ) {

    super(name, birthdate);

    this._enrollment = this.generateEnrollment();
    this._evaluationResults = evaluationResults;
  }

  generateEnrollment(): string {
    return Math.floor(Math.random() * 1000000000000000).toString();
  }

  gradeSum() {
    const score = this._evaluationResults.map(el => el.score);
    return score.reduce((a, c) => a + c);
  }

  gradeAvg() {
    const score = this._evaluationResults.map(el => el.score);
    return score.reduce((a, c) => a + c) / 6;
  }

  get enrollment() {
    return this._enrollment;
  }
}

// const eva1: Evaluation
// const student1: Student = new Student('Fernando', [10, 10, 9, 9], [10, 10]);
// const student2: Student = new Student('Lucas', [9, 9, 9, 9], [9, 9]);
// const student3: Student = new Student('Nilo', [8, 8, 8, 8], [8, 8]);
// const student4: Student = new Student('Filipe', [7, 7, 7, 7], [7, 7]);
// const student5: Student = new Student('Leo', [6, 6, 6, 6], [6, 6]);


