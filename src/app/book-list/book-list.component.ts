import Book from '../book';
import { BookService } from '../book.service';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

export class BooksDataSource extends DataSource<Book> {
  books: Observable<Book[]>;

  constructor(books: Observable<Book[]>) {
    super();
    this.books = books;
  }

  connect(): Observable<Book[]> {
    return this.books;
  }

  disconnect() {}
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  tableColumns: string[] = ['title', 'category', 'description'];

  books: BooksDataSource;
  booksCount: number;

  constructor(private booksService: BookService, private infoBar: MatSnackBar) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    const books = this.booksService.getBooks();
    books.subscribe(booksUpdate => {
      this.booksCount = booksUpdate.length;
      this.showInfo(`New book added.`);
    });

    this.books = new BooksDataSource(books);
  }

  showInfo(message: string) {
    // if already initialised
    if (this.booksCount) {
      this.infoBar.open(message, undefined, {
        duration: 2000,
      });
    }
  }
}
