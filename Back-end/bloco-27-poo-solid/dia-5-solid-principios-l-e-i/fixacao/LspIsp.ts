class Passenger {
  constructor(public nome: string, public cpf: number) { }
}

class ShippedItem {
  constructor(
    public nome: string,
    public id: number,
    public customerID: string,
  ) { }
}

class Flight {
  constructor(public num: number, public passengers: Passenger[]) { }

  Add(newPassenger: Passenger): void {
    this.passengers.push(newPassenger);
  }

  Remove(removedPassenger: Passenger): void {
    const index = this.passengers.indexOf(removedPassenger, 0);
    if (index > -1) {
      this.passengers.splice(index, 1);
    }
  }
}

class Company {
  constructor(public nome: string, public flights: Flight[]) { }
}

interface ITravelingCompany {
  NewFlight(flightNum: number): void
  AddToFlight(flightNum: number, passenger: Passenger): void
  RemoveFromFlight(flightNum: number, passenger: Passenger): void
}

class TravelingCompany extends Company implements ITravelingCompany {
  NewFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }

  AddToFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Add(passenger);
    }
  }

  RemoveFromFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Remove(passenger);
    }
  }
}

interface IShippingCompany {
  AddToPassanger(item: ShippedItem, flightNum: number, passenger: Passenger): void
}

class ShippingCompany extends Company implements IShippingCompany {
  constructor(public name: string, public flights: Flight[], public lugaggeFligth: [ShippedItem, Flight]) {
    super(name, flights)
  }
  AddToPassanger(item: ShippedItem, flightNum: number): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      this.lugaggeFligth.push(item, currentFlight);
    }
  }
}

// RESP TRYBE

class Passenger {
  constructor(public nome: string, public cpf: number) { }
}

class ShippedItem {
  constructor(
    public nome: string,
    public id: number,
    public customerID: string,
  ) { }
}

class Flight {
  // Primeiro, ajustamos o construtor da classe Flight
  // para suportar tanto passageiros quanto cargas
  constructor(public num: number, public payload: (Passenger | ShippedItem)[]) { }

  // A função Add agora poderá adicionar tanto
  // passageiros quanto cargas
  Add(newPayload: Passenger | ShippedItem): void {
    this.payload.push(newPayload);
  }

  // De igual modo, a função Remove pode remover
  // tanto passageiros quanto cargas
  Remove(removedPayload: Passenger | ShippedItem): void {
    const index = this.payload.indexOf(removedPayload, 0);
    if (index > -1) {
      this.payload.splice(index, 1);
    }
  }
}

class Company {
  constructor(public nome: string, public flights: Flight[]) { }
  // NewFlight pode ser implementada aqui, já que
  // sua funcionalidade se mantém em todas as
  // subclasses
  NewFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }

  // Ajustes feitos na superclasse são transmitidos
  // para as subclasses
  AddToFlight(flightNum: number, payload: Passenger | ShippedItem): void { }
  RemoveToFlight(flightNum: number, payload: Passenger | ShippedItem): void { }
}

class TravelingCompany extends Company {
  AddToFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Add(passenger);
    }
  }

  RemoveFromFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Remove(passenger);
    }
  }
}

class ShippingCompany extends Company {
  AddToFlight(flightNum: number, item: ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Add(item);
    }
  }

  RemoveToFlight(flightNum: number, item: ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Remove(item);
    }
  }
}