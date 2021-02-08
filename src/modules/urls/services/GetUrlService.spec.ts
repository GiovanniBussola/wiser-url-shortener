import AppError from '@shared/errors/AppError';
import FakeUrlsRepository from '../repositories/fakes/FakeUrlsRepository';
import CreateUrlService from './CreateUrlService';
import GetUrlService from './GetUrlService';

let fakeUrlsRepository: FakeUrlsRepository;
let createUrl: CreateUrlService;
let getUrl: GetUrlService;

describe('GetUrlService', () => {
  beforeEach(() => {
    fakeUrlsRepository = new FakeUrlsRepository();

    createUrl = new CreateUrlService(fakeUrlsRepository);
    getUrl = new GetUrlService(fakeUrlsRepository);
  });

  it('should be able to return a saved url', async () => {
    const savedUrl = await createUrl.execute({
      url: 'https://wisereducacao.com/',
    });

    const url = await getUrl.execute({ shorted_url: savedUrl.shorted_url });
    expect(url.url).toEqual('https://wisereducacao.com/');
  });

  it('should not be able to return a saved url if does not exists', async () => {
    await expect(
      getUrl.execute({ shorted_url: 'randomtxt' }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to return a saved url if is expired', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2010, 4, 10, 12).getTime();
    });

    const savedUrl = await createUrl.execute({
      url: 'https://wisereducacao.com/',
    });

    await expect(
      getUrl.execute({ shorted_url: savedUrl.shorted_url }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
