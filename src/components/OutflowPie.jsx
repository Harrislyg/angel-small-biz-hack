import React from 'react';
// import Plotly from 'react-plotlyjs';
const PieChart = require('react-chartjs').Pie;

class InflowOutflow extends React.Component {

  render(){

    const index = this.props.month-8;
    const datap = this.props.data;
    console.log(datap);
    const data=
      [{value:datap[index][0],
        color:'#F7464A',
        highlight:'#FF5A5E',
        label:'Inventory',
    },
    {value:datap[index][1],
      color:'#46BFBD',
      highlight:'#5AD3D1',
      label:'Payroll'},
      {value:datap[index][2],
        color:'#FDB45C',
        highlight:'#FFC870',
        label:'Rent and Utilities '},
        {value:datap[index][3],
          color:'#637b85',
          highlight:'#FFC870',
          label:'Investing and Financing'},
          {value:datap[index][4],
            color:'#c62f29',
            highlight:'#FFC870',
            label:'Miscellaneous'}


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
      <div class="pie-chart">
        <h2>Outflows</h2>
        <PieChart data={data} options={options} />
      </div>
    );
  }
}

export default InflowOutflow;
