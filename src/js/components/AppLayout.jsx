var React = require('react');

var AppLayout = React.createClass({
	render: function () {
		return (
			<div className="app-container">
				{this.props.children}
			</div>
		);
	}
});

module.exports = AppLayout;