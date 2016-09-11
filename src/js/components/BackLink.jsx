var React = require('react'),

	ReactRouter = require('react-router'),
	Link = ReactRouter.Link;

var BackLink = React.createClass({
	render: function () {
		return (
			<Link to={'/'} className="back-link">
				Перейти к поиску
			</Link>
		);
	}
});

module.exports = BackLink;