var React = require('react'),

	ReactRouter = require('react-router'),
	Link = ReactRouter.Link;

var FilmSnippet = React.createClass({
	render: function () {
		return (
			<Link to={'/film/' + this.props.imdbID} className={'film-item' + (this.props.last == true ? ' film-item_last' : '')}>
				{
					this.props.Poster != 'N/A' ? 
					(<img src={this.props.Poster} alt="" className="film-item__poster" />) : ('')
				}
				<div className="film-item__description">
					<div className="film-item__title">
						{this.props.Title}
					</div>
					<div>
						Year: {this.props.Year}
					</div>
					<div>
						Type: {this.props.Type}
					</div>
				</div>
			</Link>
		);
	}
});

module.exports = FilmSnippet;