import { ChatterPage } from './app.po';

describe('chatter App', () => {
  let page: ChatterPage;

  beforeEach(() => {
    page = new ChatterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
