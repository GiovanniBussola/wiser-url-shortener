import { getRepository, Repository } from 'typeorm';

import IUrlsRepository from '@modules/urls/repositories/IUrlsRepository';
import ICreateUrlDTO from '@modules/urls/dtos/ICreateUrlDTO';
import Url from '../entities/Url';

class UrlsRepository implements IUrlsRepository {
  private ormRepository: Repository<Url>;

  constructor() {
    this.ormRepository = getRepository(Url);
  }

  public async create({ url, shorted_url, expires_in }: ICreateUrlDTO): Promise<Url> {
    const createdUrl = this.ormRepository.create({
      url,
      shorted_url,
      expires_in
    });

    await this.ormRepository.save(createdUrl);

    return createdUrl;
  }

  public async findByShortedUrl(shorted_url: string): Promise<Url | undefined> {
    const findUrl = await this.ormRepository.findOne({
      where: {
        shorted_url,
      },
    });

    return findUrl;
  }
}

export default UrlsRepository;
