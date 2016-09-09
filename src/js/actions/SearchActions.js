var actions = {
	setResults: function (payload) {
		return {
			type: 'SEARCH_RESULTS',
			payload: payload
		}
	},
	loading: function (payload) {
		return {
			type: 'LOADING',
			payload: payload
		}
	}
}

module.exports = actions;