import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListPageComponent } from './book-list-page/book-list-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatSnackBarModule,
} from '@angular/material';

export default {
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    BookListPageComponent,
    BookFormComponent,
    BookListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
};
