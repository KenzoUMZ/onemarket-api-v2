import express from 'express'
import errorHandler from './middlewares/errorHandler'
import routes from './routes'
import { connect } from 'mongoose';
import mongo from './config/mongo';
// const options = {
//   dotfiles: 'ignore',
//   etag: false,
//   extensions: ['png'],
//   index: false,
//   maxAge: '1d',
//   redirect: false,
// }

const port = 5001
const uri = mongo.config.url as string;
const app = express()

app.use(express.static('public'))

app.use(express.json())
app.use(routes)
app.use(errorHandler)

connect(
  uri,
)
  .then(() => {
    console.log('Database Connected!')
    app.listen(port)
  })
  .catch((err) => console.log(err))