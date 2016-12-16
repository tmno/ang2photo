import { Ang2photoPage } from './app.po';

describe('ang2photo App', function() {
  let page: Ang2photoPage;

  beforeEach(() => {
    page = new Ang2photoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
