import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Booklist App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display app title', () => {
    expect(page.getParagraphText()).toEqual('Booklist App');
  });

  it('should display add book form section', () => {
    expect(page.getBookForm().isDisplayed()).toEqual(true);
  });

  it('should display add book list section', () => {
    expect(page.getBooklist().isDisplayed()).toEqual(true);
  });

  it('should display book list table only with header row on load', () => {
    const bookListRows = page.getBookListTableRows();
    expect(bookListRows.count()).toEqual(1);
  });

  it('should add book to book list on form submition', async () => {
    await page.populateBookForm({
      title: 'Liverpool Football Club',
      description: `John Williams explores the origins and divisive politics of soccer in the city of Liverpool...`,
      category: 'sport'
    });

    await page.submitForm();
    const bookListRows = page.getBookListTableRows();

    expect(bookListRows.count()).toEqual(2);
  });

  xit('should add book to book list on form submition', async () => {
    await page.populateBookForm({
      title: 'Liverpool Football Club',
      description: `John Williams explores the origins and divisive politics of soccer in the city of Liverpool...`,
      category: 'sport'
    });

    await page.submitForm();
    const bookListRows = page.getBookListTableRows();

    const newBookTableRow = bookListRows.last();
    expect(newBookTableRow.element(by.binding('element.description'))).toEqual('Liverpool Football Club');
  });
});
