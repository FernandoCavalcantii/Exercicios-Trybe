export default interface Enrrolable {
  enrollment: string;
  generateEnrollment(): string;
}