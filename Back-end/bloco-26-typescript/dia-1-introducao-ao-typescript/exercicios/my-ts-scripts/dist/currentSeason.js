"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const months_1 = __importDefault(require("./months"));
const seasons_1 = __importDefault(require("./seasons"));
const monthsNames = Object.values(months_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const seasonsSouth = {
    [seasons_1.default.OUTONO]: [months_1.default.MARCO, months_1.default.ABRIL, months_1.default.MAIO, months_1.default.JUNHO],
    [seasons_1.default.INVERNO]: [months_1.default.JUNHO, months_1.default.JULHO, months_1.default.AGOSTO, months_1.default.SETEMBRO],
    [seasons_1.default.PRIMAVERA]: [months_1.default.SETEMBRO, months_1.default.OUTUBRO, months_1.default.NOVEMBRO, months_1.default.DEZEMBRO],
    [seasons_1.default.VERAO]: [months_1.default.DEZEMBRO, months_1.default.JANEIRO, months_1.default.FEVEREIRO, months_1.default.MARCO],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [seasons_1.default.OUTONO]: seasonsSouth[seasons_1.default.PRIMAVERA],
    [seasons_1.default.INVERNO]: seasonsSouth[seasons_1.default.VERAO],
    [seasons_1.default.PRIMAVERA]: seasonsSouth[seasons_1.default.OUTONO],
    [seasons_1.default.VERAO]: seasonsSouth[seasons_1.default.INVERNO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const month = Object.values(months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month)) {
        switch (seasons) {
            case '0':
                console.log('OUTONO');
                break;
            case '1':
                console.log('INVERNO');
                break;
            case '2':
                console.log('PRIMAVERA');
                break;
            case '3':
                console.log('VERAO');
                break;
        }
    }
    ;
});
