import { Logger } from "./Logger";

export default interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}