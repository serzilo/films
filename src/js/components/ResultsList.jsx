var React = require('react'),
	
	bindActionCreators = require('redux').bindActionCreators,
	connect = require('react-redux').connect,

	ReactRouter = require('react-router'),
	hashHistory = ReactRouter.hashHistory,

	axios = require('axios'),

	Title = require('./Title.jsx'),
	Loader = require('./Loader.jsx'),
	Error = require('./Error.jsx'),
	BackLink = require('./BackLink.jsx'),
	FilmSnippet = require('./FilmSnippet.jsx'),

	styles = require('../stylesConfig.json'),

	pageActions = require('../actions/SearchActions');

var ResultsList = React.createClass({	
	componentDidMount: function () {
		var query = this.props.location.query.s,
			_this =  this;

		if (query && query.length > 0){
			query =  'http://www.omdbapi.com/?s=' + query;

			this.props.pageActions.getDataRequest();

			axios
				.get(query)
				.then(function (response) {

					if (response.data.Search) {
						_this.props.pageActions.getDataSuccess({results: response.data.Search});
					} else {
						_this.props.pageActions.getDataFailure({results: [], error: response.data.Error});
					}
					
				})
				.catch(function (response) {
					console.log(response)
					_this.props.pageActions.getDataFailure({results: [], error: response.data.Error});
				});
		} else {
			hashHistory.replace({pathname: '/'});
		}
	},
	componentWillUnmount: function () {
		this.props.pageActions.clearStore();
	},
	render: function () {
		var _this = this;

		return (
			<div>
				<Title>
					Результаты поиска
				</Title>

				<Loader show={this.props.loading} />

				<Error error={this.props.error} />

				<div className={styles.container}>
					{
						this.props.results.map(function (prop, i) {
							return (
								<FilmSnippet key={i} {...prop} last={_this.props.results.length - 1 == i ? true : false} />
							)
						})
					}
				</div>

				<BackLink />
			</div>
		);
	}
});

function mapStateProps (state) {
	return {
		results: state.FilmsList.results,
		loading: state.FilmsList.loading,
		error: state.FilmsList.error
	}
}

function mapDispatchToProps (dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

module.exports = connect(mapStateProps, mapDispatchToProps)(ResultsList);