var React = require('react'),
	styles = require('../stylesConfig.json');

var Loader = React.createClass({
	render: function () {
		return (
			<div className={styles.container + ' ' + styles.container_loader + (this.props.show ? '' : ' ' + styles.hidden)}>
				Загрузка...
			</div>
		);
	}
});

module.exports = Loader;