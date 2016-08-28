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


		return (
			<div>
			<PieChart data={data} options={options} />
			</div>
		);
	}
}

export default Pie;