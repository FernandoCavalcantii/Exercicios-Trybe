import Evaluation from "./Evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this._score = score;
  }

  get evaluation(): string {
    return this._evaluation.type;
  }

  get score(): number {
    return this._score;
  }

  set score(s: number) {
    if (s < 0) throw new Error('Score cannot be a negative number');
    if (this._evaluation.type === 'prova' && s > 25 || this._evaluation.type === 'trabalho' && s > 50)
      throw new Error('Score cannot be higher than evaluation score');
    this._score = s;
  }
}