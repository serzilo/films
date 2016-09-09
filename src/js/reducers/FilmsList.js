var initialState = {
	loading: false,
	results: [{"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg"},
	{"Title":"Batman: The Dark Knight Returns, Part 1","Year":"2012","imdbID":"tt2313197","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"},
	{"Title":"Batman: The Dark Knight Returns, Part 2","Year":"2013","imdbID":"tt2166834","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ1Mjk1NTY2NV5BMl5BanBnXkFtZTgwMTA2MDEwNzE@._V1_SX300.jpg"}]
};

function ConfigureStore (state, action) {
	var state = state || initialState;

	switch (action.type) {
		case 'SEARCH_RESULTS':
	 		return Object.assign({}, state, action.payload);
	 	case 'LOADING':
	 		return Object.assign({}, state, {loading: action.payload});
	 	default: 
			return state;
	}
}

module.exports = ConfigureStore;