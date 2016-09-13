var React = require('react'),

	ReactRouter = require('react-router'),
	Link = ReactRouter.Link,

	styles = require('../stylesConfig.json');

var BackLink = React.createClass({
	render: function () {
		return (
			<Link to={'/'} className={styles.back_link}>
				Перейти к поиску
			</Link>
		);
	}
});

module.exports = BackLink;