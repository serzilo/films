var React = require('react'),

	Title = require('./Title.jsx'),
	DataTable = require('./DataTable.jsx');

var FilmCard = React.createClass({
	tempData: {id: 1, poster: '1.jpg', title: 'Терминатор', year: 1980, type: 'фильм'},
	render: function () {
		return (
			<div>
				<Title>FilmCard {this.props.params.imdbId}</Title>
				<DataTable {...this.tempData} />
			</div>
		);
	}
});

module.exports = FilmCard;