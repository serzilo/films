var path = require('path'),
	webpack = require('webpack'),
	NODE_ENV = process.env.NODE_ENV || 'dev';

console.log('NODE_ENV: ' + NODE_ENV);

module.exports = {
	devtool: NODE_ENV == 'dev' ? 'source-map' : null,
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
				test: /\.json$/, 
				loader: 'json-loader'
			},
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

if (NODE_ENV == 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	);
}