var path = require('path'),
	webpack = require('webpack');

module.exports = {
	//devtool: 'cheap-module-eval-source-map',
	devtool: false,
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/js/app'
	],
	output: {
		path: path.resolve(__dirname, 'build/js'),
		filename: 'bundle.js',
		publicPath: '/js/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		preLoaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['eslint'],
				include: [
					path.resolve(__dirname, "src/js/"),
				],
			}
		],
		loaders: [
			{
				loaders: ['react-hot', 'babel-loader'],
				include: [
					path.resolve(__dirname, "src/js/"),
				],
				test: /\.(js|jsx)$/,
				plugins: ['transform-runtime'],
			}
		]
	}
};