var React = require('react');

var Error = React.createClass({
	render: function () {
		return (
			<div className={'container container_error' + (this.props.error ? '' : ' hidden')}>
				{this.props.error}
			</div>
		);
	}
});

module.exports = Error;