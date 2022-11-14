import { Router } from 'express';
import { MarketController } from '../controller/marketController';

const userRouter = Router();
const marketController = new MarketController();

userRouter.get('/', marketController.listMarkets);
userRouter.post('/', marketController.insertMarket);
export default userRouter;