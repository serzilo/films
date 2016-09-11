var React = require('react'),
	
	bindActionCreators = require('redux').bindActionCreators,
	connect = require('react-redux').connect,

	axios = require('axios'),

	Title = require('./Title.jsx'),
	Loader = require('./Loader.jsx'),
	Error = require('./Error.jsx'),
	BackLink = require('./BackLink.jsx'),
	DataTable = require('./DataTable.jsx');

var FilmCard = React.createClass({
	componentDidMount: function () {
		var query = this.props.params.imdbId,
			_this =  this;

		if (query.length > 0){
			query =  'http://www.omdbapi.com/?i=' + query;

			this.props.pageActions.getDataRequest();

			axios
				.get(query)
				.then(function (response) {

					if (!response.data.Error) {
						_this.props.pageActions.getDataSuccess({film: response.data});
					} else {
						_this.props.pageActions.getDataFailure({film: {}, error: response.data.Error});
					}
					
				})
				.catch(function (response) {
					_this.props.pageActions.getDataFailure({film: {}, error: response.data.Error});
				});
		}
	},
	componentWillUnmount: function () {
		this.props.pageActions.clearStore();
	},
	render: function () {
		return (
			<div>
				<Title>Карточка фильма</Title>

				<Loader show={this.props.loading} />

				<Error error={this.props.error} />

				<div className="container">
					<DataTable {...this.props.film} />
				</div>

				<BackLink />
			</div>
		);
	}
});

function mapStateProps (state) {
	return {
		film: state.FilmCard.film,
		loading: state.FilmCard.loading,
		error: state.FilmCard.error
	}
}

function mapDispatchToProps (dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

module.exports = connect(mapStateProps, mapDispatchToProps)(FilmCard);