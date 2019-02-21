import Book from './book';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  addBook(book: Book) {
    this.books.next([...this.books.value, book]);
  }

  getBooks() {
    return this.books;
  }

}
