var React = require('react');

var DataTable = React.createClass({
	render: function () {
		console.log(this.props)
		for (var p in this.props) {
			// console.log(p);
		}
		return (
			<div>
				<table>
					{

					}
				</table>
			</div>
		);
	}
});

module.exports = DataTable;