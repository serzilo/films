var React = require('react'),

	ReactRouter = require('react-router'),
	Link = ReactRouter.Link,

	styles = require('../stylesConfig.json');

var FilmSnippet = React.createClass({
	render: function () {
		return (
			<Link to={'/film/' + this.props.imdbID} className={(styles.film_item) + (this.props.last == true ? ' ' + styles.film_item_last : '')}>
				{
					this.props.Poster != 'N/A' ? 
					(<img src={this.props.Poster} alt="" className={styles.film_item__poster} />) : ('')
				}
				<div className={styles.film_item__description}>
					<div className={styles.film_item__title}>
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