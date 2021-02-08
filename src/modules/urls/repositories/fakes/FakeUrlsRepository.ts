import ICreateUrlDTO from '@modules/urls/dtos/ICreateUrlDTO';
import Url from '@modules/urls/infra/typeorm/entities/Url';
import CreateRandomCharactersUtil from '@modules/urls/utils/CreateRandomCharactersUtil';
import IUrlsRepository from '../IUrlsRepository';

class FakeUrlsRepository implements IUrlsRepository {
  private urls: Url[] = [];

  public async create(data: ICreateUrlDTO): Promise<Url> {
    const url = new Url();

    const randomId = await new CreateRandomCharactersUtil().generate(1, 999);

    Object.assign(url, { id: randomId }, data);

    this.urls.push(url);

    return url;
  }

  public async findByShortedUrl(shorted_url: string): Promise<Url | undefined> {
    const findUrl = this.urls.find(url => url.shorted_url === shorted_url);

    return findUrl;
  }
}

export default FakeUrlsRepository;
