var React = require('react'),
	styles = require('../stylesConfig.json');

var DataTable = React.createClass({
	render: function () {
		var _this = this;

		return (
			<div>
				<table className={styles.data_table}>
					<tbody>
						{
							Object.keys(this.props).map(function (key, i) {
	  							return (
									<tr key={i}>
	  									<td className={styles.data_table__td + ' ' + styles.data_table__td_title}>
	  										{key}
	  									</td>
	  									<td className={styles.data_table__td + (key == 'Title' ? ' ' + styles.text__bold : '')}>
	  										{
	  											key == 'Poster' ? 
	  												_this.props[key] == 'N/A' ?
	  													(<div>N/A</div>)
	  												:
	  													(<img src={_this.props[key]} alt="" className={styles.data_table__image} />) 
	  											
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