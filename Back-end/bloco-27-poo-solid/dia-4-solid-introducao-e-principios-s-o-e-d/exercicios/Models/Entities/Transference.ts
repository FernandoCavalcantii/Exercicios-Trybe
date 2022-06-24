import Payment from './Payment';

export default class Transference extends Payment {
  account: string;

  constructor(senderId: number, account: string) {
    super(0, senderId);
    this.account = account;
  }
}
