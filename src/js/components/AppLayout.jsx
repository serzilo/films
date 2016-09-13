var React = require('react'),
	styles = require('../stylesConfig.json');

var AppLayout = React.createClass({
	render: function () {
		return (
			<div className={styles.app_container}>
				{this.props.children}
			</div>
		);
	}
});

module.exports = AppLayout;