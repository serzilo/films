var React = require('react'),

	ReactRouter = require('react-router'),
	hashHistory = ReactRouter.hashHistory,

	Title = require('./Title.jsx');

var MainPage = React.createClass({
	componentDidMount: function () {
		this.searchInputFocus();
	},
	searchInputFocus: function () {
		this.refs.searchInput.focus();
	},
	handleSubmit: function (event) {
		event.preventDefault();

		var query = this.refs.searchInput.value.trim();

		if (query.length > 0) {
			hashHistory.push({pathname: '/search', query: {s: query}});
		} else {
			this.searchInputFocus();
		}
	},
	render: function () {
		return (
			<div>
				<Title>
					Поиск фильмов
				</Title>

				<div className="container container_search">
					<div className="search">
						<form onSubmit={this.handleSubmit}>
							<input className="search__input" ref="searchInput" type="text" placeholder="Введите фильм" />
							<button className="search__submit" type="submit">Найти</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = MainPage;