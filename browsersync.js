var browserSync = require('browser-sync'),
	webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpackConfig = require('./webpack.config');
	bundler = webpack(webpackConfig);

browserSync({
	server: {
		baseDir: 'build',

		middleware: [
			webpackDevMiddleware(bundler, {
				publicPath: webpackConfig.output.publicPath,
				stats: { colors: true }
			}),
			webpackHotMiddleware(bundler)
		]
	},
	files: [
		'build/css/*.css',
		'build/*.html'
	]
});