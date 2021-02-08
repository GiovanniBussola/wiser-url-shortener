import urlsRouter from '@modules/urls/infra/http/routes/urls.routes';
import { Router, Response, Request } from 'express';

const routes = Router();

routes.use('/api', (request: Request, response: Response) => {
  return response.json({ message: 'API Wiser Url Shortener v1.0' })
});

routes.use('/', urlsRouter);


export default routes;
