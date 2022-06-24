import Payment from './Payment';

export default class Pix extends Payment {
  key: string;
  data: Date;

  constructor(senderId: number, key: string, data: Date) {
    super(0, senderId);
    this.key = key;
    this.data = data;
  }

  set value(value: number) {
    if (value > 0) {
      this._value = value;
    }
  }

  get value() {
    return this._value;
  }
}
