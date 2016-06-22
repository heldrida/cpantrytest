var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: __dirname + '/app',
	entry: './app.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: []
	},
	node: {
		console: true
	}
};