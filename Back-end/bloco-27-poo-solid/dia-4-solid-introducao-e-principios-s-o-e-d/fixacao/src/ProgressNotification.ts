export default function progressNotification(
  message: string,
  notificationType: string,
): void {
  switch (notificationType) {
    case 'Email':
      console.log('Email: ', message);
      break;
    case 'Phone':
      console.log('Phone: ', message);
      break;
    case 'Console':
      console.log('Console: ', message);
      break;
    default:
      console.log(message);
      break;
  }
}

class ProgressNotification {
  constructor(private message: string, private notificationType: string) {
    this.message = message;
    this.notificationType = notificationType;
  }

  notification(): void {
    console.log(`${this.notificationType}: ${this.message}`);
  }
}

console.log(new ProgressNotification('Oi', 'Pc').notification());