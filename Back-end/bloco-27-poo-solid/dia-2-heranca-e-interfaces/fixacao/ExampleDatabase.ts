import Database from "./Database";
import { Logger } from "./Logger";
import { ConsoleLogger, ConsoleLogger2 } from "./Logger";

class ExampleDatabase implements Database {
  logger: Logger;

  constructor(logger: Logger = new ConsoleLogger) {
    this.logger = logger;
  }

  save(key: string, value: string): void {
    this.logger.log(`${key}, ${value}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2()

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('Key', 'Value');
database2.save('A', 'B');
database3.save('C', 'D');
