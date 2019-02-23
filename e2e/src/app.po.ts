import Book from '../../src/app/book';
import { browser, by, element } from 'protractor';

export class AppPage {
  bookTitleFormEl = element(by.css('form [formControlName=title]'));
  bookCategoryFormEl = element(by.css('form [formControlName=category]'));
  bookDescriptionFormEl = element(by.css('form [formControlName=description]'));

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getBookForm() {
    return element(by.css('app-book-form form'));
  }

  getBooklist() {
    return element(by.css('.book-list'));
  }

  getBookFormTitle() {
    return element(by.css('app-book-form mat-card-header')).getText();
  }

  getBookListTableRows() {
    return this.getBooklist().all(by.css('tr'));
  }

  async populateBookForm(bookInfo: Book) {
    await this.bookTitleFormEl.sendKeys(bookInfo.title);
    await this.bookCategoryFormEl.sendKeys(bookInfo.category);
    await this.bookDescriptionFormEl.sendKeys(bookInfo.description);
  }

  async submitForm() {
    await this.getBookForm().submit();
  }
}
