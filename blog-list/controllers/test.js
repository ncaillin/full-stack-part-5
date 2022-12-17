const express = require('express')
const User = require('../models/user')
const Blog = require('../models/blog')
const testRouter = express.Router()

testRouter.post(
  '/reset', async (request, response, next) => {
    try {
      await User.deleteMany({})
      console.log('user OK')
      await Blog.deleteMany({})
      console.log('password OK')
      response.status(200).end()
    } catch(error) {
      console.log('error in testrouter')
      next(error)
    }
  }
)

module.exports = testRouter