/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable max-classes-per-file */
// // // // Musician.ts
// // // import Flute from './Flute';

// // // export default class Musician {
// // //   flute: Flute;

// // //   constructor(public name: string) {
// // //     this.flute = new Flute('minha flauta');
// // //   }

// // //   play(): void {
// // //     this.flute.play();
// // //     console.log(
// // //       `"${this.name}" é quem está comandando a emissão das melodias`,
// // //     );
// // //   }
// // // }

// // // const musician = new Musician('Márcia');
// // // musician.play();

// // import Flute from './Flute';

// // export default class Musician {
// //   // Agora a flauta é recebida como parâmetro
// //   constructor(
// //     public name: string,
// //     public flute: Flute,
// //   ) { this.name = name; this.flute = flute; }

// //   play(): void {
// //     this.flute.play();
// //     console.log(
// //       `"${this.name}" é quem está comandando a emissão das melodias`,
// //     );
// //   }
// // }

// // const flute = new Flute('Minha flauta');
// // const musician = new Musician('Márcia', flute);
// // musician.play();

// // Musician.ts
// import Flute from './Flute';

// export default class Musician {
//   // Agora o parâmetro da flauta tem um valor padrão caso nenhuma seja passada
//   constructor(
//     public name: string,
//     public flute: Flute = new Flute('Minha flauta'),
//   ) { this.name = name; this.flute = flute; }

//   play(): void {
//     this.flute.play();
//     console.log(
//       `"${this.name}" é quem está comandando a emissão das melodias`,
//     );
//   }
// }

// const musician = new Musician('Márcia');
// musician.play();

// Vimos que:

// Entidades de alto nível não devem depender de entidades de baixo nível. Ambos devem depender de abstrações.

// E que:

// Se uma função ou classe de alto nível (vamos chamar de H) utiliza outra função ou classe de mais baixo nível (vamos chamar de L) em seu interior, L deve ser passada para H por quem chama/usa H, e não estar explicitamente instanciada dentro de H.

interface Instrument {
  name: string;
  play(): void;
}

class Flute implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Drums implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar bem forte`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}

class Musician {
  constructor(
    public name: string,
    public instrument: Instrument = new Flute('Minha flauta'),
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão dos sons`,
    );
  }
}

const musician1 = new Musician('Márcia');
const musician2 = new Musician('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician('Natan', new Guitar('Meu violão'));

musician1.play();
musician2.play();
musician3.play();