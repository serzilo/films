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
	  										{
	  											key == 'Poster' ? 
	  												_this.props[key] == 'N/A' ?
	  													(<div>N/A</div>)
	  												:
	  													(<img src={_this.props[key]} alt="" />) 
	  											
	  											: 
	  												(<div>{_this.props[key]}</div>)
	  										}
	  										
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