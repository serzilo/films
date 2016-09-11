var React = require('react');

var DataTable = React.createClass({
	render: function () {
		var _this = this;

		return (
			<div>
				<table className='data-table'>
					<tbody>
						{
							Object.keys(this.props).map(function (key, i) {
	  							return (
									<tr key={i}>
	  									<td className='data-table__td data-table__td_title'>
	  										{key}
	  									</td>
	  									<td className={'data-table__td' + (key == 'Title' ? ' text__bold' : '')}>
	  										{
	  											key == 'Poster' ? 
	  												_this.props[key] == 'N/A' ?
	  													(<div>N/A</div>)
	  												:
	  													(<img src={_this.props[key]} alt="" className="data-table__image" />) 
	  											
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