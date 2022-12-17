const express = require('express')
const User = require('../models/user')
const Blog = require('../models/blog')
const testRouter = express.Router()

testRouter.post(
  '/reset', async (request, response, next) => {
    try {
      await User.deleteMany({})
      await Blog.deleteMany({})
      response.status(200).end()
    } catch(error) {
      next(error)
    }
  }
)

module.exports = testRouter