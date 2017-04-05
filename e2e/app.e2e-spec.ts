import { NgBootstrapPage } from './app.po';

describe('ng-bootstrap App', () => {
  let page: NgBootstrapPage;

  beforeEach(() => {
    page = new NgBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
