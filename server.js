var webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./webpack.config'),
	express = require('express'),

	NODE_ENV =  process.env.NODE_ENV || 'dev';

var devMode = NODE_ENV == 'dev';
	port = 3000;
	app = new (express)(),
	compiler = webpack(config);

console.log('save bundle.js: ' + !devMode);

compiler.run(function (err, stats) {
	//console.log(stats.toJson()); 
	console.log('bundle.js compiled in '+ (devMode ? 'memory' : 'file'));
});

if (devMode) {
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
	app.use(webpackHotMiddleware(compiler));

	app.use(express.static('build'));

	app.get("/", function(req, res) {
		res.sendFile(__dirname + '/build/index.html');
	});

	app.listen(port, function(error) {
		if (error) {
			console.error(error);
		} else {
			console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
		}
	});
} 