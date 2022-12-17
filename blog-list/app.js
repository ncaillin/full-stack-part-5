const express = require('express')
const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const config = require('./utils/config')
const logger = require('./utils/logger')
const cors = require('cors')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const morgan = require('morgan')
const testRouter = require('./controllers/test')
const app = express()
app.use(cors())
app.use(express.json())
app.use(
  morgan( //morgan for logging of requests
    (tokens, request, response) => {
      return [
        tokens.method(request, response),
        tokens.url(request, response),
        tokens.status(request, response),
        tokens.res(request, response, 'content-length'), '-',
        tokens['response-time'](request, response), 'ms'
      ].join(' ')
    }
  )
)

logger.info('Connecting to DB')

mongoose
  .connect(config.MONGO_URL)
  .then(() => {
    logger.info('Connected to Mongo DB')
  })
  .catch((err) => logger.error(err))

app.use(middleware.tokenExtractor)
app.use('/api/blogs', middleware.userExtractor, blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
if(process.env.NODE_ENV === 'test') {
  app.use('/api/test', testRouter)
}
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports = app