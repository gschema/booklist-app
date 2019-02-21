import Book from '../book';
import { BookService } from '../book.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators
  } from '@angular/forms';

const maxLength = 30;

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  maxLength: number = maxLength;

  addBookForm: FormGroup;

  categories = [
    {name: 'Drama'},
    {name: 'Comedy'},
    {name: 'Sport'},
  ];

  constructor(private fb: FormBuilder, private booksService: BookService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addBookForm = this.fb.group({
      title: [null, Validators.compose([Validators.required, Validators.maxLength(maxLength)])],
      category: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  onSubmit(formDirective: FormGroupDirective) {
    if (this.addBookForm.valid) {
      this.booksService.addBook(this.addBookForm.value as Book);
      formDirective.resetForm();
      this.addBookForm.reset();
    }
  }
}
