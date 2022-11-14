import { Request, Response } from 'express'
import { MarketService } from '../services/marketService';
import { MarketDTOValidation } from '../dtos/ICreateMarketDTO';
import AppError from '../errors/AppError';

export class MarketController {
  async listMarkets(
    request: Request,
    response: Response,
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
    }
  }

  async insertMarket(request: Request, response: Response) {
    try {
      const marketDTO = request.body
      const marketService = new MarketService();

      await MarketDTOValidation.validate(marketDTO).catch(err => {
        throw new AppError(err.message, 400);
      });

      const result = await marketService.insertMarket(marketDTO).catch(err => {
        throw new AppError(err.message, 401);
      });


      response.send(result);
    } catch (err) {
      console.log(err)
    }
  }

}
