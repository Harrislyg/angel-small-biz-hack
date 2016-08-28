import React from 'react';
import { render } from 'react-dom';

class Goal extends React.Component {

	render(){
		const {
			inflows,
			outflows,
			balance,
			target
		} = this.props;

		return (
			<div>
			<div>
			Inflows
			{inflows}
			</div>
			<div>
			Outflows
			{outflows}
			</div>
			<div>
			Balance
			{balance}
			</div>
			<div>
			Target
			{target}
			</div>
			</div>
		);
	}
}

Goal.defaultProps = {
  		inflows: 30000,
    	outflows: 10000,
    	balance: 20000,
    	target: 50000,
}
export default Goal;