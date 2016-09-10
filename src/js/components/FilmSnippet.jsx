var React = require('react'),

	ReactRouter = require('react-router'),
	Link = ReactRouter.Link;

var FilmSnippet = React.createClass({
	render: function () {
		return (
			<div>
				<Link to={'/film/' + this.props.imdbID} className="film-item">
					<div>
						{this.props.imdbID}
					</div>

					{
						this.props.Poster != 'N/A' ? 
						(<div>
							<img src={this.props.Poster} alt="" />
						</div>) : ('')
					}

					<div>
						{this.props.Title}
					</div>
					<div>
						{this.props.Year}
					</div>
					<div>
						{this.props.Type}
					</div>
				</Link>
				<hr />
			</div>
		);
	}
});

module.exports = FilmSnippet;