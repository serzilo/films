var React = require('react');

var DataTable = React.createClass({
	render: function () {
		var _this = this;

		return (
			<div>
				<table>
					<tbody>
						{
							Object.keys(this.props).map(function (key, i) {
	  							return (
	  								<tr key={i}>
	  									<td>
	  										{key}
	  									</td>
	  									<td>
	  										{_this.props[key]}
	  									</td>
	  								</tr>
	  							)
	  						})
						}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = DataTable;