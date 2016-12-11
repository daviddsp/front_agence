const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')

const config = require('./webpack/webpack.dev.config')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.bodyParser())

const compiler = webpack(config)
const port = process.env.PORT || 9000

const wdm = webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
})

app.use(wdm)
app.use(webpackHotMiddleware(compiler))
//app.use((req, res) => res.sendFile(__dirname + '/dist/index.html'))
app.get('/', function(req, res){
	res.sendFile(__dirname + '/dist/index.html')
})
//app.use(express.static(__dirname + '/public'))
const server = app.listen(port, 'localhost', serverError => {
	if(serverError) {
		return console.error(serverError)
	}
	console.log('Aplication run http://localhost:' + port)
})