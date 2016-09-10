var React = require('react');

var Error = React.createClass({
	render: function () {
		return (
			<div style={{display: this.props.error ? 'block' : 'none'}}>
				{this.props.error}
			</div>
		);
	}
});

module.exports = Error;