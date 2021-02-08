import AppError from '@shared/errors/AppError';
import { isAfter } from 'date-fns';
import { inject, injectable } from 'tsyringe';

import Url from '../infra/typeorm/entities/Url';
import IUrlsRepository from '../repositories/IUrlsRepository';

interface IRequest {
  shorted_url: string;
}

@injectable()
class GetUrlService {
  constructor(
    @inject('UrlsRepository')
    private urlsRepository: IUrlsRepository,
  ) {}

  public async execute({ shorted_url }: IRequest): Promise<Url> {
    const url = await this.urlsRepository.findByShortedUrl(shorted_url);

    if (!url) {
      throw new AppError('Url does not exists in database.', 404);
    }

    const currentDate = new Date(Date.now());

    if (isAfter(url.expires_in, currentDate)) {
      throw new AppError('The Url is expired', 400);
    }

    return url;
  }
}

export default GetUrlService;
