import React from 'react';
import Plotly from 'react-plotlyjs';

class Line extends React.Component {

	render(){

		const revenue = {
			x: [1,3,6,8,12],
			y: [10000,20000,30000,40000,12000],
			mode: 'lines',
			name: 'revenue',
			lines: {
				dash: 'solid',
				width: 4
			}
		};

		const expense = {
			x: [1,3,6,8,12],
			y: [8000,18000,23000,35000,1000],
			mode: 'lines',
			name: 'expense',
			lines: {
				dash: 'dotdash',
				width: 4
			}
		};


		const data=[revenue , expense ];

		const layout={
			title: 'Revenue and Expense',
			xaxis: {
				range: [1, 12.25 ],
				autorange: false
			},
			yaxis: {
				range: [0, 50000],
				autorange: false,
			},
			legend: {
				y: 1800,
				// x: ['Jan' , 'March', 'Jun' ,'Aug' , 'Dec' ],
				traceorder: 'reversed',
				font: {
					size: 16
				},
				yref: 'paper'
			}
		};

		const config = {
      	showLink: false,
      	displayModeBar: false,
    	};

		return (
			<Plotly data={data} layout={layout} config={config} />
		);
	}
}

export default Line;