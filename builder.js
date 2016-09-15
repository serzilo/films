var browserSync = require('browser-sync'),
	webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpackConfig = require('./webpack.config'),

	bundler = webpack(webpackConfig),
	NODE_ENV = process.env.NODE_ENV || 'dev',
	devMode = NODE_ENV == 'dev';

console.log('save bundle.js: ' + !devMode);

if (devMode) {
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
}

bundler.run(function (err, stats) {
	//console.log(stats.toJson()); 
	console.log('bundle.js compiled in '+ (devMode ? 'memory' : 'file'));
});