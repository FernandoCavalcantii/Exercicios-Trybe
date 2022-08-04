"use strict";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Segunda"] = 1] = "Segunda";
    weekDays[weekDays["Ter\u00E7a"] = 2] = "Ter\u00E7a";
    weekDays[weekDays["Quarta"] = 3] = "Quarta";
    weekDays[weekDays["Quinta"] = 4] = "Quinta";
    weekDays[weekDays["Sexta"] = 5] = "Sexta";
    weekDays[weekDays["Sabado"] = 6] = "Sabado";
    weekDays[weekDays["Domingo"] = 7] = "Domingo";
})(weekDays || (weekDays = {}));
var rainbow;
(function (rainbow) {
    rainbow["Blue"] = "Blue";
    rainbow["Yellow"] = "Yellow";
    rainbow["Green"] = "Green";
    rainbow["Red"] = "Red";
})(rainbow || (rainbow = {}));
var actions;
(function (actions) {
    actions["Salvar"] = "Salvar";
    actions["Imprimir"] = "Imprimir";
    actions["Abrir"] = "Abrir";
    actions["visualizar"] = "Visualizar";
    actions["Fechar"] = "Fechar";
})(actions || (actions = {}));
var direcoes;
(function (direcoes) {
    direcoes["Norte"] = "Norte";
    direcoes["Leste"] = "Leste";
    direcoes["Sul"] = "Sul";
    direcoes["Oeste"] = "Oeste";
})(direcoes || (direcoes = {}));
