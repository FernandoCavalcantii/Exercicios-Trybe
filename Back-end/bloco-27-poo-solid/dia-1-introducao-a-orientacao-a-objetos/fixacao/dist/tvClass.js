"use strict";
class Tv {
    constructor(_brand, _size, _resolution, _connection, _connectedTo) {
        this._brand = _brand;
        this._size = _size;
        this._resolution = _resolution;
        this._connection = _connection;
        this._connectedTo = _connectedTo;
    }
    turnOn() {
        console.log(`Turning on ${this._brand} TV, Size: ${this._size}, Resolution: ${this._resolution}, Connection: ${this._connection}, Connected To ${this._connectedTo}`);
    }
    set connect(connection) {
        const rightConnection = this._connection.find((c) => c === connection);
        console.log(rightConnection);
        if (!rightConnection)
            console.log('Sorry, connection unavailable!');
        this._connectedTo = connection;
    }
}
const samsung = new Tv('Samsung', '30em', '4k FullHD', ['HDMI', 'Test'], 'HDMI');
samsung.turnOn();
samsung.connect = 'HDMI';
