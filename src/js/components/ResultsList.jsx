var React = require('react');

var ResultsList = React.createClass({
	render: function () {
		return (
			<div>ResultsList {this.props.params.query}</div>
		);
	}
});

module.exports = ResultsList;