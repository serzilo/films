var React = require('react'),

	Title = require('./Title.jsx'),
	DataTable = require('./DataTable.jsx');

var FilmCard = React.createClass({
	
	tempData: {"Title":"Batman Begins","Year":"2005","Rated":"PG-13","Released":"15 Jun 2005","Runtime":"140 min","Genre":"Action, Adventure","Director":"Christopher Nolan","Writer":"Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)","Actors":"Christian Bale, Michael Caine, Liam Neeson, Katie Holmes","Plot":"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.","Language":"English, Urdu, Mandarin","Country":"USA, UK","Awards":"Nominated for 1 Oscar. Another 15 wins & 66 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg","Metascore":"70","imdbRating":"8.3","imdbVotes":"981,117","imdbID":"tt0372784","Type":"movie","Response":"True"},
	
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