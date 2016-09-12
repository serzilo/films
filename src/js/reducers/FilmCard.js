var Constants = require('../constants/FilmCard');

var initialState = {
	loading: false,
	film: {},
	error: false
};

function ConfigureStore (state, action) {
	state = state || initialState;

	switch (action.type) {
		case Constants.GET_DATA_REQUEST:
	 		return Object.assign({}, state, {loading: true, error: false});
		case Constants.GET_DATA_SUCCESS:
	 		return Object.assign({}, state, action.payload, {loading: false, error: false});
	 	case Constants.GET_DATA_FAILURE:
	 		return Object.assign({}, state, action.payload, {loading: false});
	 	case Constants.CLEAR_STORE:
	 		return Object.assign({}, initialState);
	 	default: 
			return state;
	}
}

module.exports = ConfigureStore;