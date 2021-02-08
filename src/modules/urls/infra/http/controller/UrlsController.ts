import { Request, Response } from 'express';

import CreateUrlService from '@modules/urls/services/CreateUrlService';

import { container } from 'tsyringe';
import GetUrlService from '@modules/urls/services/GetUrlService';

export default class UrlsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { newUrl } = request.body;

    const createUrl = container.resolve(CreateUrlService);

    const url = await createUrl.execute({ url: newUrl });

    return response.status(201).json(url);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { shorted_url } = request.params;

    const getUrlService = container.resolve(GetUrlService);

    const url = await getUrlService.execute({ shorted_url });

    return response.status(200).json({url: url.url});
  }
}
