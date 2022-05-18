const fs = require("fs");
const sinon = require("sinon");
const { expect } = require("chai");

const numberIs = require("./index.js");
const answers = ["positivo", "neutro", "negativo"];
const notNumber = "o valor deve ser um número";
describe("numberIs", () => {
  describe("Não foi passado um número", () => {
    it("Retorno da função deve ser 'o valor deve ser um número'", () => {
      const answer = numberIs("string");
      expect(answer).to.equals(notNumber);
    });
  });
  describe("Passado um número, se o retorno da função é", () => {
    it("Uma string", () => {
      const answer = numberIs(5);
      expect(answer).to.be.a("string");
    });
    describe("Acima de 0", () => {
      it("A resposta é 'positivo'", () => {
        const answer = numberIs(6);
        expect(answer).to.equals(answers[0]);
      });
    });
    describe("Igual a 0", () => {
      it("A resposta é 'neutro'", () => {
        const answer = numberIs(0);
        expect(answer).to.equals(answers[1]);
      });
    });
    describe("Menor que 0", () => {
      it("A reposta é 'negativo'", () => {
        const answer = numberIs(-2);
        expect(answer).to.equals(answers[2]);
      });
    });
  });
});
