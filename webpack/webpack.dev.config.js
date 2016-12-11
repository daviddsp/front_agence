const path = require('./path')
const merge = require('webpack-merge')
const configCommon = require('./webpack.commons.config')
const webpack = require('webpack')

const PORT = process.env.PORT || 9000;

const configDev = {
	entry: {
		'budle': [
			'webpack-hot-middleware/client?reload=true&path=http://localhost:'+PORT+'/__webpack_hmr',
			path.join(path.src, 'index.js')

		]
	},

	output: {
		publicPath: 'http://localhost:'+PORT+'/dist/'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
};

const configMerge = merge(configCommon, configDev);

module.exports = configMerge;