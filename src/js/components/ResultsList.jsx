var React = require('react'),
	
	bindActionCreators = require('redux').bindActionCreators,
	connect = require('react-redux').connect,

	Title = require('./Title.jsx'),
	FilmSnippet = require('./FilmSnippet.jsx');

	pageActions = require('../actions/SearchActions');

var ResultsList = React.createClass({	
	btnClick: function (e) {
		e.preventDefault();
		this.props.pageActions.loading(!this.props.loading);
	},
	render: function () {
		return (
			<div>
				<Title>
					Результат поиска
				</Title>

				{this.props.location.query.s}

				<div>
					{
						this.props.results.map(function (prop, i) { 
							return (
								<FilmSnippet key={i} {...prop} />
							)
						})
					}
				</div>

				<button onClick={this.btnClick}>LOAD! {this.props.loading == true ? 'yes' : 'no'}</button>
			</div>
		);
	}
});

function mapStateProps (state) {
	return {
		results: state.FilmsList.results,
		loading: state.FilmsList.loading
	}
}

function mapDispatchToProps (dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

module.exports = connect(mapStateProps, mapDispatchToProps)(ResultsList);