var React = require('react');

var Title = React.createClass({
	render: function () {
		return (
			<h1>
				{this.props.children}
			</h1>
		);
	}
});

module.exports = Title;