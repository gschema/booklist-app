import { AppPage } from './app.po';

describe('Booklist App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display app title', () => {
    expect(page.getParagraphText()).toEqual('Booklist App');
  });

  it('should display add book form', () => {
    expect(page.getBookForm().isDisplayed()).toEqual(true);
  });

  it('should display add book list', () => {
    expect(page.getBooklist().isDisplayed()).toEqual(true);
  });
});
