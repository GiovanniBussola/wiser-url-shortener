import { Router } from 'express';

import UrlsController from '../controller/UrlsController';

const urlsRouter = Router();
const urlsController = new UrlsController();

urlsRouter.post('/urls', urlsController.create);
urlsRouter.get('/:shorted_url', urlsController.index);

export default urlsRouter;
