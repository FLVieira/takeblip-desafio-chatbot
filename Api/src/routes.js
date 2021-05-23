import { Router } from 'express';

import requisitionHandler from './reqHandler';

const routes = new Router();

routes.get('/api', requisitionHandler.index);

export default routes;
