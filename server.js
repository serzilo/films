var webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./webpack.config'),
	express = require('express');

var saveBundle = process.argv[2] === 'saveBundle';
	port = 3000;
	app = new (express)(),
	compiler = webpack(config);

console.log('save bundle.js: ' + saveBundle);

compiler.run(function (err, stats) {
	//console.log(stats.toJson()); 
	console.log('bundle.js compiled in '+ (saveBundle ? 'file' : 'memory'));
});

if (!saveBundle) {
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
	app.use(webpackHotMiddleware(compiler));
} 

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

// node server - save bundle.js in memory
// node server saveBundle - save bundle.js in file (build/js/bundle.js)