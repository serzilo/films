var webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./webpack.config');

var express = require('express'),
	app = new (express)(),
	port = 3000,
	compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('build'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
})

app.listen(port, function(error) {
	if (error) {
		console.error(error);
	} else {
		console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
	}
})