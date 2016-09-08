var React = require('react'),

	ReactRouter = require('react-router'),
	Link = ReactRouter.Link;

var FilmSnippet = React.createClass({
	render: function () {
		return (
			<div>
				<Link to={'/film/' + this.props.id} className="film-item">
					<div>
						{this.props.id}
					</div>
					<div>
						{this.props.poster}
					</div>
					<div>
						{this.props.title}
					</div>
					<div>
						{this.props.year}
					</div>
					<div>
						{this.props.type}
					</div>
				</Link>
			</div>
		);
	}
});

module.exports = FilmSnippet;