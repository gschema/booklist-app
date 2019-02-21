import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books = [
    {
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
  ]

  constructor() { }

  getBooks() {
    return this.books;
  }
}
