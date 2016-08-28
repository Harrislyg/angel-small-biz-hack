import React from 'react';
// import Plotly from 'react-plotlyjs';
const PieChart = require('react-chartjs').Pie;

class Pie extends React.Component {

	render(){

	const data=
        [{value:91.82349378988447,
        	color:'#F7464A',
        	highlight:'#FF5A5E',
        	label:'Red',
        },
        {value:164.5245314190956,
       	color:'#46BFBD',
        highlight:'#5AD3D1',
        label:'Green'},
        {value:96.46570741652802,color:'#FDB45C',highlight:'#FFC870',label:'Yellow'},
        {value:27.780361889841565,color:'#949FB1',highlight:'#A8B3C5',label:'Grey'},
        {value:107.91181512597598,color:'#4D5360',highlight:'#616774',label:'Dark Grey'}
        ];

    const options =  {
    	responsive: true,
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
		// const revenue = {
		// 	type: 'scatter',
		// 	x: [1,3,6,9,12],
		// 	y: [0,8678,9862,13254,13856],
		// 	mode: 'lines',
		// 	name: 'revenue',
		// 	lines: {
		// 		color: 'rgb(219, 64, 82)',
		// 		width: 4
		// 	}
		// };

		// const expense = {
		// 	type: 'scatter',
		// 	x: [1,3,6,9,12],
		// 	y: [0,9324,6732,4941,3935],
		// 	mode: 'lines',
		// 	name: 'expense',
		// 	lines: {
		// 		color: 'rgb(55, 128, 191)',
		// 		width: 4
		// 	}
		// };


		// const data=[revenue , expense ];

		// const layout={
		// 	// width: 500,
		// 	// height: 500
		// 	// title: 'Revenue and Expense',
		// 	// xaxis: {
		// 	// 	range: [1, 12.25 ],
		// 	// 	autorange: false
		// 	// },
		// 	// yaxis: {
		// 	// 	range: [0, 15000],
		// 	// 	autorange: false,
		// 	// },
		// 	// legend: {
		// 	// 	y: 400,
		// 	// 	// x: ['Jan' , 'March', 'Jun' ,'Aug' , 'Dec' ],
		// 	// 	traceorder: 'reversed',
		// 	// 	font: {
		// 	// 		size: 16
		// 	// 	},
		// 	// 	yref: 'paper'
		// 	// }
		// };

		// const config = {
  //     	showLink: false,
  //     	displayModeBar: false,
  //   	};

		return (
			<div>
			<PieChart data={data} options={options} />
			</div>
		);
	}
}

export default Pie;