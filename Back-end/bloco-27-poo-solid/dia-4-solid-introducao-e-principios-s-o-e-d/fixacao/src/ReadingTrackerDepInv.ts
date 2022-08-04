// ReadingTracker.ts

import EmailNotification from './EmailNotification';
import Notification from './Notification';

export default class ReadingTracker {
    private readingGoal: number;
    private booksRead: number;
    private notificator: Notification;

    constructor(readingGoal: number, notificator: Notification) {
        this.notificator = notificator;
        this.readingGoal = readingGoal;
        this.booksRead = 0;
    }

    trackReadings(readsCount: number): void {
        this.booksRead += readsCount;
        if (this.booksRead >= this.readingGoal) {
            this.notificator.sendNotification(
                'Congratulations! You\'ve reached your reading goal!',
            );
            return;
        }
        this.notificator.sendNotification('There are still some books to go!');
    }
    // Aqui viriam mais métodos, que fogem o escopo deste exercício 
}

const email = new EmailNotification('faf');
const emailRT = new ReadingTracker(3, email);
emailRT.trackReadings(3);