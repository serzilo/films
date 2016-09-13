var React = require('react'),
	styles = require('../stylesConfig.json');

var Title = React.createClass({
	render: function () {
		return (
			<h1 className={styles.title}>
				{this.props.children}
			</h1>
		);
	}
});

module.exports = Title;