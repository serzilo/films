var React = require('react'),

	connect = require('react-redux').connect,

	Title = require('./Title.jsx'),
	FilmSnippet = require('./FilmSnippet.jsx');

var ResultsList = React.createClass({	
	render: function () {
		console.log(this.props);

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
			</div>
		);
	}
});

function mapStateProps (state) {
	return {
		results: state.FilmsList.results
	}
}

module.exports = connect(mapStateProps)(ResultsList);