var Constants = require('../constants/FilmsList');

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
	}
}

module.exports = actions;