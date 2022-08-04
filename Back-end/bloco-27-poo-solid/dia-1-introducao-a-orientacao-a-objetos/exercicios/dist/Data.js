"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(_day, _month, _year) {
        this._day = 1;
        this._month = 1;
        this._year = 1900;
        this._day = _day;
        this._month = _month;
        this._year = _year;
    }
    getMonthName() {
        switch (this._month) {
            case 1:
                console.log('Janeiro');
                break;
            case 2:
                console.log('Fevereiro');
                break;
            case 3:
                console.log('Março');
                break;
            case 4:
                console.log('Abril');
                break;
            case 5:
                console.log('Maio');
                break;
            case 6:
                console.log('Junho');
                break;
            case 7:
                console.log('Julho');
                break;
            case 8:
                console.log('Agosto');
                break;
            case 9:
                console.log('Setembro');
                break;
            case 10:
                console.log('Outubro');
                break;
            case 11:
                console.log('Novembro');
                break;
            case 12:
                console.log('Dezembro');
                break;
        }
    }
    set day(day) {
        if (day > 31)
            throw new Error('Max day = 31');
        this._day = day;
    }
    set month(month) {
        if (month > 12)
            throw new Error('Max month = 12');
        this._month = month;
    }
    set year(year) {
        if (year < 1900)
            throw new Error('Min year = 1900');
    }
    date() {
        console.log(`${this._day}/${this._month}/${this._year}`);
    }
}
exports.default = Item;
