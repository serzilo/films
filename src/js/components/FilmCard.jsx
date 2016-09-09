var React = require('react'),

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

module.exports = connect(mapStateProps)(FilmCard);