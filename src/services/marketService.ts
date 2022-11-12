import Market from "../models/market";

export class MarketService {
    public async listMarkets(): Promise<any> {
        try {

            const response = await Market.find()
            console.log(response)
            return response;
        } catch (error) {
            throw (error);
        }
    }
}


