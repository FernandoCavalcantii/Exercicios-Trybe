import { IPlane } from "./interfaces";

class Airplane implements IPlane {
    fly(): void { console.log('Pilots the plane'); }
}

export default Airplane;