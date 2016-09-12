var Redux = require('redux'),
	createStore = Redux.createStore,
	Index = require('../reducers/Index');

function ConfigureStore (initialState) {
	var store = createStore(Index, initialState);

	return store;
}

module.exports = ConfigureStore;