import React from 'react';
// import Plotly from 'react-plotlyjs';
const BarChart = require('react-chartjs').Bar;

class BarChart2 extends React.Component {

	render(){

	const data= {
        datasets: [{
            label: 'Scatter Dataset',
            data: [ 0,215,867,7667,10788],
            fillColor: [
                'rgba(220,220,220,0.2)',
                'rgba(220,220,220,0.2)',
                'rgba(220,220,220,0.2)',
                'rgba(255,0,0,0.2)',
                'rgba(255,0,0,0.2)'
            ],
            pointColor: 'rgba(220,220,220,1)',
            pointHighlightFill: '#fff' ,
            pointHighlightStroke: 'rgba(220,220,220,1)' ,
            pointStrokeColor: '#fff',
            strokeColor: 'rgba(220,220,220,1)',
        },
        ],

        labels : ["Jan" , "March" , "June" ,"Sept" , "Dec"]

    };

    const options =  {
    	responsive: true,
    }


		return (
			<div>
			<BarChart data={data} options={options} />
			</div>
		);
	}
}

export default BarChart2;