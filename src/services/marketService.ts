import { json } from "stream/consumers";
import ICreateMarketDTO from "../dtos/ICreateMarketDTO";
import Market from "../models/market";

export class MarketService {
    public async listMarkets(): Promise<any> {
        try {

            const response = await Market.find()
            return response;
        } catch (error) {
            throw (error);
        }
    }
    public async insertMarket(marketDTO: ICreateMarketDTO): Promise<any> {
        try {
            console.log(marketDTO);
            await Market.create(marketDTO)
            return marketDTO;
        } catch (error: any) {
            throw (error);
        }
    }


}


