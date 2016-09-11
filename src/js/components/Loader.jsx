var React = require('react');

var Loader = React.createClass({
	render: function () {
		return (
			<div className={'container container_loader' + (this.props.show ? '' : ' hidden')}>
				Загрузка...
			</div>
		);
	}
});

module.exports = Loader;