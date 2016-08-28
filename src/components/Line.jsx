import React, { Component, PropTypes } from 'react'
const LineChart = require('react-chartjs').Line

class Line extends Component {

  static get propTypes() { return {
    data: PropTypes.object,
    options: PropTypes.object
  }}

  static get defaultProps() { return {
    data: {
      datasets: [{
        label: 'Revenue',
        data: [ 0,8678,9862,13254,13856],
        fillColor: 'transparent', //rgba(235,255,216,50)',
        pointColor: '#82D120',
        pointHighlightStroke: '#82D120',
        pointStrokeColor: '#fff',
        strokeColor: '#82D120',
      }, {
        label: 'Expenses',
        data: [0,9324,6732,4941,3935 ],
        fillColor: 'transparent', //rgba(255,207,174,50)',
        pointColor: '#F2705A',
        pointHighlightStroke: '#F2705A',
        pointStrokeColor: '#fff',
        strokeColor: '#F2705A',
      }],
      labels : ['Jan' , 'Mar' , 'Jun' ,'Sep' , 'Dec']
    },
    options: {}
  }}

  render() {

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
    // }

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
    // }


    // const data=[revenue , expense ]

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
    // }

    // const config = {
    //     	showLink: false,
    //     	displayModeBar: false,
    //   	}

    const options = Object.assign({}, this.props.options, {
      responsive: true,
      scales: {
        xAxes: {
          type: 'linear',
          position: 'bottom',
        },
      },
      scaleShowVerticalLines: false,
      scaleShowHorizontalLines: false,
    })

    return (
      <div className="chart--line">
        <LineChart data={this.props.data} options={options} />
      </div>
    )
  }

}

export default Line
