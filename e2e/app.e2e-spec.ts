import { Ang2doListPage } from './app.po';

describe('ang2do-list App', () => {
  let page: Ang2doListPage;

  beforeEach(() => {
    page = new Ang2doListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
