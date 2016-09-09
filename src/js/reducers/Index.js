var Redux = require('redux'),
	combineReducers = Redux.combineReducers,

	FilmsList = require('./FilmsList'),
	FilmCard = require('./FilmCard');

var CombinedReducers = combineReducers({
	FilmsList: FilmsList,
	FilmCard: FilmCard
})

module.exports = CombinedReducers;