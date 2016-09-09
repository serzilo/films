var React = require('react'),
	
	bindActionCreators = require('redux').bindActionCreators,
	connect = require('react-redux').connect,

	Title = require('./Title.jsx'),
	DataTable = require('./DataTable.jsx');

var FilmCard = React.createClass({
	render: function () {
		return (
			<div>
				<Title>FilmCard {this.props.params.imdbId}</Title>
				<DataTable {...this.props.film} />
			</div>
		);
	}
});

function mapStateProps (state) {
	return {
		film: state.FilmCard.film
	}
}

function mapDispatchToProps (dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

module.exports = connect(mapStateProps, mapDispatchToProps)(FilmCard);