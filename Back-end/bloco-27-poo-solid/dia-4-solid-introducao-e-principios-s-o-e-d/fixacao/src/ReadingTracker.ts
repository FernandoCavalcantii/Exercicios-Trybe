// ReadingTracker.ts
type Book = {
  book: string;
  author: string;
  genre: string;
}

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  private wishlist: Book[];
  private progressMessage = 'There are still some books to go!';
  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
    this.wishlist = [];
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
  }

  progress(): void {
    if (this.booksRead >= this.readingGoal) {
      this.progressMessage = 'Congratulations! You\'ve reached your reading goal!';
    }
  }

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }

  progressNotification(): void {
    console.log(this.progressMessage);
  }
}

const readTracker = new ReadingTracker(20);
readTracker.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
readTracker.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);