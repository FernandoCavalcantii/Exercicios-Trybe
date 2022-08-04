import MyInterface from "./MyInterface";

class MyClass implements MyInterface {

  constructor(public myNumber: number) { };

  myFunc(myParam: number): string {
    const result = this.myNumber + myParam;
    return result.toString();
  };
}

const object = new MyClass(10);

console.log(object.myFunc(10));
