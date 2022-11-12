import { Router } from "express";

import bodyParser from 'body-parser'
import userRouter from "./market.routes";


const routes = Router();

routes.use(bodyParser.urlencoded({ extended: true }))
routes.use(bodyParser.json())

routes.use('/markets', userRouter);

routes.get('/health', (req, res) => {
  res.status(200).send({
    status: 'Market API connector is okay!',
  })
})

export default routes

