require('dotenv').config()

const convict = require('convict')

const config = convict({
  debug: {
    doc: 'Whether debugging is on or off',
    format: Boolean,
    default: false,
    env: 'DEBUG'
  },

  env: {
    doc: 'The current application environment',
    format: ['production', 'staging', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },

  port: {
    doc: 'The port to bind to',
    format: 'port',
    default: 3000,
    env: 'PORT'
  },

  // Sentry

  sentry_dsn: {
    doc: 'The Sentry DSN for Sentry logging',
    format: String,
    env: 'SENTRY_DSN',
    default: ''
  },

})

module.exports = config
