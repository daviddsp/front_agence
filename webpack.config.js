const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV === 'production') {
	module.exports = require('./webpack/webpack.prod.config')
} else {
	module.exports = require('./webpack/webpack.dev.config')
}