import Book from './book';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: BehaviorSubject<Book[]> = new BehaviorSubject([{
      category: 'Drama',
      description: 'Drama book description',
      title: 'Drama book',
    },
    {
      category: 'Sport',
      description: 'Sport book description',
      title: 'Sport book',
    },
    {
      category: 'Comedy',
      description: 'Comedy book description',
      title: 'Comedy book',
    }
  ]);

  addBook(book: Book) {
    this.books.next([...this.books.value, book]);
  }

  getBooks() {
    return this.books;
  }

}
