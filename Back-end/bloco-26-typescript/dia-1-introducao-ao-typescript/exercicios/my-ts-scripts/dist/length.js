"use strict";
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, baseUnit, convertedUnit) {
    const fromIndex = units.indexOf(baseUnit);
    const toIndex = units.indexOf(convertedUnit);
    const expoent = toIndex - fromIndex;
    return value * Math.pow(10, expoent);
}
console.log(convert(300, 'm', 'km'));
