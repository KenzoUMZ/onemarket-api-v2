import { Request, Response, NextFunction } from 'express'
import { MarketService } from '../services/marketService';


export class MarketController {
  async listMarkets(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const marketService = new MarketService();

      console.log('calling service')
      const result = await marketService.listMarkets().catch((err: any) => {
        throw err;
      });

      response.send(result)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }


}
