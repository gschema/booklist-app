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

  it('should add book to book list on form submission', async () => {
    await page.populateBookForm({
      title: 'Liverpool Football Club',
      description: `John Williams explores the origins and divisive politics of soccer in the city of Liverpool...`,
      category: 'Sport'
    });

    await page.submitForm();
    const bookListRows = page.getBookListTableRows();

    expect(bookListRows.count()).toEqual(2);
  });

  it('should display correct book info in book list on form submission', async () => {
    const bookFixture = {
      title: 'Liverpool Football Club',
      description: `John Williams explores the origins and divisive politics of soccer in the city of Liverpool...`,
      category: 'Sport'
    };
    await page.populateBookForm(bookFixture);

    await page.submitForm();
    const bookListRows = page.getBookListTableRows();

    const newBookTableRow = bookListRows.last();

    function  getCellText(name: string) {
      return newBookTableRow.element(by.css(`.${name}`)).getText();
    }

    const title = getCellText('title');
    const category = getCellText('category');
    const description = getCellText('description');

    expect(title).toEqual(bookFixture.title);
    expect(category).toEqual(bookFixture.category);
    expect(description).toEqual(bookFixture.description);
  });
});
