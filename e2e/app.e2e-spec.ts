import { BillsplitPage } from './app.po';

describe('billsplit App', () => {
  let page: BillsplitPage;

  beforeEach(() => {
    page = new BillsplitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
