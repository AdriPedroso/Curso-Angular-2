import { MiscelaneosPage } from './app.po';

describe('miscelaneos App', () => {
  let page: MiscelaneosPage;

  beforeEach(() => {
    page = new MiscelaneosPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
