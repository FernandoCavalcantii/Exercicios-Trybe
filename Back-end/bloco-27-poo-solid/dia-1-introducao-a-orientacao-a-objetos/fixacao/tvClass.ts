class Tv {
  private _brand: string;
  private _size: string;
  private _resolution: string;
  private _connection: string[];
  private _connectedTo: string;

  constructor(_brand: string, _size: string, _resolution: string, _connection: string[], _connectedTo: string) {
    this._brand = _brand;
    this._size = _size;
    this._resolution = _resolution;
    this._connection = _connection;
    this._connectedTo = _connectedTo;
  }

  turnOn() {
    console.log(`Turning on ${this._brand} TV, Size: ${this._size}, Resolution: ${this._resolution}, Connection: ${this._connection}, Connected To ${this._connectedTo}`)
  }

  set connect(connection: string) {
    const rightConnection = this._connection.find((c) => c === connection);
    console.log(rightConnection);
    if (!rightConnection) console.log('Sorry, connection unavailable!');
    this._connectedTo = connection;
  }
}

const samsung = new Tv('Samsung', '30em', '4k FullHD', ['HDMI', 'Test'], 'HDMI');
samsung.turnOn();
samsung.connect = 'HDMI';