const webpack = require('webpack');
const htmlWebpackPlugins = require('html-webpack-plugin'),
	ExtracTextPlugin = require('extract-text-webpack-plugin');
const path = require('./path');

const config = {
	output: {
		path: path.dist,
		filename: 'bunddle.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders:[
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.css$/,
				loader: ExtracTextPlugin.extract("style", 'css?sourceMap!resolve-url')
			},
			{
				test: /\.scss$/,
				loader: ExtracTextPlugin.extract("style", 'css?sourceMap!resolve-url!sass?sourceMap')
			}
		]
	},

	plugins: [
		//new ExtracTextPlugin('asset/css/style.css', {allChunks: true})
		new htmlWebpackPlugins({
			title: 'Agence Test',
			filename: path.join(path.dist, 'index.html'),
			template: path.join(path.src, 'template/index.tpl.html')
		})
	]
}

module.exports = config;