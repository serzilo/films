var React = require('react'),
	styles = require('../stylesConfig.json');

var Error = React.createClass({
	render: function () {
		return (
			<div className={styles.container + ' ' + styles.container_error + (this.props.error ? '' : ' ' + styles.hidden)}>
				{this.props.error}
			</div>
		);
	}
});

module.exports = Error;