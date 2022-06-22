class Superclass {
  constructor(public _isSuper: boolean = true) { }

  /*private*/ sayHello(): void {
    console.log('Olá mundo');
  }
}

class Subclass extends Superclass {
  constructor() {
    super(false);
  }
  sayHello2(): void {
    this.sayHello();
  }
};

const superObj: Superclass = new Superclass();
const object: Subclass = new Subclass();

function myFunc(obj: Superclass) {
  // obj.sayHello();
  // obj.sayHello2();
  console.log(obj._isSuper);
}

myFunc(object);
myFunc(superObj);

