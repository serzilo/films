var React = require('react');

var FilmCard = React.createClass({
	render: function () {
		return (
			<div>FilmCard {this.props.params.imdbId}</div>
		);
	}
});

module.exports = FilmCard;