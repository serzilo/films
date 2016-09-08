var React = require('react'),

	ReactRouter = require('react-router'),
	hashHistory = ReactRouter.hashHistory,

	Title = require('./Title.jsx');

var MainPage = React.createClass({
	handleSubmit: function (event) {
		event.preventDefault();

		var query = this.refs.searchInput.value.trim();

		if (query.length > 0) {
			hashHistory.push({pathname: '/search', query: {s: query}});
		}

	},
	render: function () {
		return (
			<div>
				<Title>
					Поиск фильмов
				</Title>

				<div>
					<form onSubmit={this.handleSubmit}>
						<input ref="searchInput" type="text" placeholder="Введите фильм" />
						<button type="submit">Найти</button>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = MainPage;