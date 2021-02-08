import { inject, injectable } from 'tsyringe';

import Url from '../infra/typeorm/entities/Url';
import IUrlsRepository from '../repositories/IUrlsRepository';
import CreateRandomCharactersUtil from '../utils/CreateRandomCharactersUtil';
import { addDays } from 'date-fns';

interface IRequest {
  url: string;
}

@injectable()
class CreateUrlService {
  constructor(
    @inject('UrlsRepository')
    private urlsRepository: IUrlsRepository,
  ) {}

  public async execute({ url }: IRequest): Promise<Url> {
    const shortedUrl = await new CreateRandomCharactersUtil().generate(5, 10);

    const insertedUrl = await this.urlsRepository.create({
      url,
      shorted_url: shortedUrl,
      expires_in: addDays(new Date(), 90),
    });

    return insertedUrl;
  }
}

export default CreateUrlService;
