// ./index.ts

import readline from "readline-sync";
import Months from "./months";
import Seasons from "./seasons";

const monthsNames = Object.values(Months);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

const seasonsSouth = {
    [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
    [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
    [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
    [Seasons.VERAO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
}
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também

const seasonsNorth = {
    [Seasons.OUTONO]: seasonsSouth[Seasons.PRIMAVERA],
    [Seasons.INVERNO]: seasonsSouth[Seasons.VERAO],
    [Seasons.PRIMAVERA]: seasonsSouth[Seasons.OUTONO],
    [Seasons.VERAO]: seasonsSouth[Seasons.INVERNO],
}

const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

const month = Object.values(Months)[choiceMonth];

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
      switch(seasons) {
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
    };
});