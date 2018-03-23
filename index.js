const config = require('./app/config')
const createApp = require('./app/server')

const app = createApp()
app.listen(config.get('port'))
