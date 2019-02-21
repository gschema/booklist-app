import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

const maxLength = 30;

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  maxLength = maxLength;

  addBookForm = this.fb.group({
    title: [null, Validators.compose([Validators.required, Validators.maxLength(maxLength)])],
    category: [null, Validators.required],
    description: [null, Validators.required],
  });

  categories = [
    {name: 'Drama'},
    {name: 'Comedy'},
    {name: 'Sport'},
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.addBookForm.valid) {
      console.log(this.addBookForm.value);
    }
  }
}
