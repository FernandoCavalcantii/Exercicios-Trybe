export interface ICar {
  drive(): void;
}

export interface IPlane {
  fly(): void;
}

export interface IFuturisticCar extends ICar, IPlane { };