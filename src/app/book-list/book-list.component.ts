import { Component, OnInit } from '@angular/core';

export interface Book {
  title: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  displayedColumns: string[] = ['title', 'category', 'description'];

  books: Book[] = [
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
  ];
}
