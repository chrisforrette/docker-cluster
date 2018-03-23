const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const helmet = require('helmet')
const config = require('./config')

module.exports = () => {
  const app = express()

  // Middleware
  
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(compression())
  app.use(helmet())

  // Routes

  app.get('/', (request, response) => {
    response.json({
      message: 'Hello'
    })
  })

  return app
}
