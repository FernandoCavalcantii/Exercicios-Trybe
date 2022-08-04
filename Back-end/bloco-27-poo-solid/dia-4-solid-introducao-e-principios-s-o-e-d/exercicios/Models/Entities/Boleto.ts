import Payment from './Payment';

export default class Boleto extends Payment {
  data: Date;
  code: string;

  constructor(code: string, senderId: number) {
    super(0, senderId);
    this.code = code;
    this.data = new Date();
  }
}
