import Url from '../infra/typeorm/entities/Url';

import ICreateUrlDTO from '../dtos/ICreateUrlDTO';

export default interface IUrlsRepository {
  create(data: ICreateUrlDTO): Promise<Url>;
  findByShortedUrl(shorted_url: string): Promise<Url | undefined>;
}
