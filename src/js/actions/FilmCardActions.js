var Constants = require('../constants/FilmCard');

var actions = {
	getDataRequest: function () {
		return {
			type: Constants.GET_DATA_REQUEST,
			payload: true
		}
	},
	getDataSuccess: function (payload) {
		return {
			type: Constants.GET_DATA_SUCCESS,
			payload: payload
		}
	},
	getDataFailure: function (payload) {
		return {
			type: Constants.GET_DATA_FAILURE,
			payload: payload
		}
	},
	clearStore: function () {
		return {
			type: Constants.CLEAR_STORE,
			payload: true
		}
	}
}

module.exports = actions;