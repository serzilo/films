var React = require('react');

var Loader = React.createClass({
	render: function () {
		return (
			<div style={{display: this.props.show ? 'block' : 'none'}}>
				Загрузка данных...
			</div>
		);
	}
});

module.exports = Loader;