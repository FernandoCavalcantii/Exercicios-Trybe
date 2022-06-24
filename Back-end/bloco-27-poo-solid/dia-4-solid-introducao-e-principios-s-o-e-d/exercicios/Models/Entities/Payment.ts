export default class Payment {
  _value: number;
  senderId: number;

  constructor(value: number, senderId: number) {
    this._value = value;
    this.senderId = senderId;
  }
}
