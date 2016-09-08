var React = require('react'),

	Title = require('./Title.jsx'),
	FilmSnippet = require('./FilmSnippet.jsx');

var ResultsList = React.createClass({
	tempData: [
		{id: 1, poster: '1.jpg', title: 'Терминатор', year: 1980, type: 'фильм'},
		{id: 2, poster: '2.jpg', title: 'Терминатор 2', year: 1985, type: 'фильм'},
		{id: 3, poster: '3.jpg', title: 'Терминатор 3', year: 1990, type: 'фильм'},
		{id: 4, poster: '4.jpg', title: 'Терминатор 4', year: 1995, type: 'фильм'}
	],
	render: function () {
		return (
			<div>
				<Title>
					Результат поиска
				</Title>

				{this.props.location.query.s}

				<div>
					{
						this.tempData.map(function (prop) { 
							return (
								<FilmSnippet key={prop.id} {...prop} />
							)
						})
					}
				</div>
			</div>
		);
	}
});

module.exports = ResultsList;