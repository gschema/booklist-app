import Book from '../../src/app/book';
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getBookForm() {
    return element(by.css('app-book-form'));
  }

  getBooklist() {
    return element(by.css('.book-list'));
  }

  getBookFormTitle() {
    return element(by.css('app-book-form mat-card-header')).getText();
  }
}
