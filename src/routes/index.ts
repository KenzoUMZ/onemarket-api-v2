import { Router } from "express";

import bodyParser from 'body-parser'
import marketRouter from "./market.routes";


const routes = Router();

routes.use(bodyParser.urlencoded({ extended: true }))
routes.use(bodyParser.json())

routes.use('/markets', marketRouter);



routes.get('/', (req, res) => {
  res.status(200).send({
    status: 'Market API connector is okay!',
  })
})

export default routes

