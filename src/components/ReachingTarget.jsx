import React, { Component } from 'react'
const PieChart = require('react-chartjs').Pie;
import { ProgressBar } from 'react-bootstrap';

class ReachingTarget extends Component {
  render() {
  	const data=
        [{value:80.00,
        	color:'#F7464A',
        	highlight:'#FF5A5E',
        	label:'Reinvest',
        },
        {value:20.00,
       	color:'#46BFBD',
        highlight:'#5AD3D1',
        label:'Remaining Balance'},
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
      <div >
      <div>
      <ProgressBar striped bsStyle="success" now={20} />
      </div>
      <p> To achieve your target </p>
      <div>
      <p> You need to reinvest 20% of your monthly income </p>
      <PieChart data={data} options={options} />
      </div>

      <p> Automate your reinvest</p>
      <button type="button">Reinvest </button>
      </div>

    )
  }
}

export default ReachingTarget
