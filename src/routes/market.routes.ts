import { Router } from 'express';
import { MarketController } from '../controller/marketController';

const userRouter = Router();
const marketController = new MarketController();

userRouter.get('/listMarkets', marketController.listMarkets);

export default userRouter;