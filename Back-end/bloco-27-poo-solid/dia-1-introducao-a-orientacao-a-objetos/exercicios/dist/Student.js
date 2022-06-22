"use strict";
class Student {
    constructor(_registration, _name, _math, _biology, _physics, _history, _project, _project2) {
        this._registration = _registration;
        this._name = _name;
        this._math = _math;
        this._biology = _biology;
        this._physics = _physics;
        this._history = _history;
        this._project = _project;
        this._project2 = _project2;
    }
    gradeSum() {
        return this._math + this._biology + this._history + this._physics + this._project + this._project2;
    }
    gradeAvg() {
        return (this._math + this._biology + this._history + this._physics + this._project + this._project2) / 6;
    }
}
const student = new Student('123abc', 'Fernando', 10, 10, 10, 10, 10, 9);
console.log(student.gradeAvg());
