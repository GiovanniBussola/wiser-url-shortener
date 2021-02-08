import FakeUrlsRepository from '../repositories/fakes/FakeUrlsRepository';
import CreateUrlService from './CreateUrlService';

let fakeUrlsRepository: FakeUrlsRepository;
let createUrl: CreateUrlService;

describe('CreateUrlService', () => {
  beforeEach(() => {
    fakeUrlsRepository = new FakeUrlsRepository();
    createUrl = new CreateUrlService(fakeUrlsRepository);
  });

  it('should be able to create a new url', async () => {
    const url = await createUrl.execute({
      url: 'https://wisereducacao.com/'
    });

    expect(url).toHaveProperty('shorted_url');
  });

  it('shorted url must be between 5 and 10 characters', async () => {
    const url = await createUrl.execute({
      url: 'https://wisereducacao.com/'
    });

    expect(url.shorted_url.length).toBeGreaterThanOrEqual(5);
    expect(url.shorted_url.length).toBeLessThanOrEqual(10);
  });
});
