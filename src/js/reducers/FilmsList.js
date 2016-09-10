var Constants = require('../constants/FilmsList');

var initialState = {
	loading: false,
	results: [],
	error: false
};

function ConfigureStore (state, action) {
	var state = state || initialState;

	switch (action.type) {
		case Constants.GET_DATA_REQUEST:
	 		return Object.assign({}, state, {loading: true, error: false});
		case Constants.GET_DATA_SUCCESS:
	 		return Object.assign({}, state, action.payload, {loading: false, error: false});
	 	case Constants.GET_DATA_FAILURE:
	 		return Object.assign({}, state, action.payload, {loading: false});
	 	default: 
			return state;
	}
}

module.exports = ConfigureStore;