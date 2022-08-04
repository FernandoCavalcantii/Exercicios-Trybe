export interface Logger {
  log(str: string): void;
}

export class ConsoleLogger implements Logger {
  log(str: string) {
    console.log(`Logger 1: ${str}`);
  }
}

export class ConsoleLogger2 implements Logger {
  log(str: string) {
    console.log(`Logger 2: ${str}`);
  }
} 