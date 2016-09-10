var React = require('react'),
	
	bindActionCreators = require('redux').bindActionCreators,
	connect = require('react-redux').connect,

	axios = require('axios'),

	Title = require('./Title.jsx'),
	Loader = require('./Loader.jsx'),
	FilmSnippet = require('./FilmSnippet.jsx');

	pageActions = require('../actions/SearchActions');

var ResultsList = React.createClass({	
	componentDidMount: function () {
		var query = this.props.location.query.s,
			_this =  this;

		if (query.length > 0){
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
					_this.props.pageActions.getDataFailure({results: [], error: response.data.Error});
				});
		}
	},
	render: function () {
		return (
			<div>
				<Title>
					Результат поиска
				</Title>

				<Loader show={this.props.loading} />

				{this.props.loading == true ? 'yes' : 'no'}

				<div>{this.props.error}</div>

				<div>
					{
						this.props.results.map(function (prop, i) { 
							return (
								<FilmSnippet key={i} {...prop} />
							)
						})
					}
				</div>
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