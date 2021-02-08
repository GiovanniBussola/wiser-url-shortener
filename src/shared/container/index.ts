import { container } from 'tsyringe';

import IUrlsRepository from '@modules/urls/repositories/IUrlsRepository';
import UrlsRepository from '@modules/urls/infra/typeorm/repositories/UrlsRepository';

container.registerSingleton<IUrlsRepository>(
  'UrlsRepository',
  UrlsRepository,
);
