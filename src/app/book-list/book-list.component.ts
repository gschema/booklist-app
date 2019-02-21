import Book from '../book';
import { BookService } from '../book.service';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  tableColumns: string[] = ['title', 'category', 'description'];

  books: BooksDataSource;

  constructor(private booksService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    const books = this.booksService.getBooks();

    this.books = new BooksDataSource(books);
  }
}

export class BooksDataSource extends DataSource<Book> {
  books: Observable<Book[]>;

  constructor (books: Observable<Book[]>) {
    super();
    this.books = books;
  }

  connect(): Observable<Book[]> {
    return this.books;
  }

  disconnect() {}
}
