import React from 'react';
// import Plotly from 'react-plotlyjs';
const PieChart = require('react-chartjs').Pie;

class InflowPie extends React.Component {

	render(){

        const index = this.props.month-8;
        const datap = this.props.data;
        console.log(datap);
	const data=
        [{value:datap[index][0],
        	color:'#F7464A',
        	highlight:'#FF5A5E',
        	label:'Cash from Operating Activities',
        },
        {value:datap[index][1],
       	color:'#46BFBD',
        highlight:'#5AD3D1',
        label:'Cash from Investments'},
        {value:datap[index][2],
            color:'#FDB45C',
            highlight:'#FFC870',
            label:'Cash from Financing Activities'}
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

export default InflowPie;