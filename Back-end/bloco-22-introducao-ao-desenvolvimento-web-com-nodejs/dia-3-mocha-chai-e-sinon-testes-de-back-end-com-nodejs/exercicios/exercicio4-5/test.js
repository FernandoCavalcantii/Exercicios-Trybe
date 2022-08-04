const fs = require("fs");
const sinon = require("sinon");
const { expect } = require("chai");

const writeOnFile = require("./index");
const functionReturn = "ok";
const fileContent = "test";

describe("writeOnFile", () => {
  before(() => {
    sinon.stub(fs, "writeFileSync").returns(functionReturn);

    sinon.stub(fs, "readFileSync").returns(fileContent);
  });

  after(() => {
    fs.writeFileSync.restore();
    fs.readFileSync.restore();
  });
  it("Function returns 'ok'", () => {
    const answer = writeOnFile("fileName.txt", "test");

    expect(answer).to.equals(functionReturn);
  });

  it("Function return a string", () => {
    const answer = writeOnFile("fileName.txt", "test");

    expect(answer).to.be.a("string");
  });

  // it("Write right content on file", () => {
  //   // writeOnFile("fileName.txt", "test");
  //   const answer = fs.readFileSync("fileName.txt", "utf-8");
  //   expect(answer).to.equals(fileContent);
  // });
});
