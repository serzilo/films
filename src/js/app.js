require('babel-polyfill');

var React = require('react'),
	ReactDom = require('react-dom'),

	ReactRouter = require('react-router'),
	Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute,
	hashHistory = ReactRouter.hashHistory,
	Redirect = ReactRouter.Redirect,

	Provider = require('react-redux').Provider,
	ConfigureStore = require('./store/ConfigureStore'),
	Store = ConfigureStore(),

	AppLayout = require('./components/AppLayout.jsx'),
	MainPage = require('./components/MainPage.jsx'),
	ResultsList = require('./components/ResultsList.jsx'),
	FilmCard = require('./components/FilmCard.jsx');

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={AppLayout}>
			<IndexRoute component={MainPage}/>
			<Route 
				path="/search"
				component={ResultsList}
			/>
			<Route 
				path="/film/:imdbId"
				component={FilmCard}
			/>
			<Redirect from='*' to='/' />
		</Route>
	</Router>
);

ReactDom.render(<Provider store={Store}>{routes}</Provider>, document.getElementById('app'));