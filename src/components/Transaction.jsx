var React = require('react')
var Inflow = require('./Inflow.jsx')
var Outflow = require('./Outflow.jsx')

import MonthSlider from './MonthSlider.jsx'
import Header from './Header.jsx'
import Goals from './Goals.jsx'
import Line from './Line.jsx'
import InflowPie from './InflowPie.jsx'
import OutflowPie from './OutflowPie.jsx'


import transactionData from 'json!../data/filtered.json'

class Transaction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMonth: 8,
      category: 'All',
      categoryOutflow: 'All'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleOutflow = this.handleOutflow.bind(this)
  }

  handleChange(newMonth) {
    this.setState({
      currentMonth: newMonth + 1
    })
  }

  handleSelect (event) {
    this.setState({
      category: event.target.value
    })
  }

  handleOutflow (event) {
    this.setState({
      categoryOutflow: event.target.value
    })
  }

  render () {
    const {
      inflow,
      outflow
    } = this.props;

    let month = this.state.currentMonth;
    if (month < 8) {
      month = 8;
    }

    return (
      <div className="transaction__container">
        <MonthSlider currentMonth={month - 1} onMonthChanged={this.handleChange} />

        <InflowPie data={inflow} month={month} />
        <Inflow onSelect={this.handleSelect} category={this.state.category} inflowData={transactionData} sliderDate={month} />

        <OutflowPie data={outflow} month={month} />
        <Outflow onOutflow={this.handleOutflow} categoryOutflow={this.state.categoryOutflow} outflowData={transactionData} sliderDate={month}/>
      </div>
    )
  }
}
Transaction.defaultProps={
  outflow: [
    [42,20,19,13,6],
    [27,19,24,13,7],
    [46,21,22,8,3],
    [48,18,21,7,6],
    [21,19,20,13,7]
  ],
  inflow: [
    [33,18,49],
    [28,22,40],
    [27,16,37],
    [52,25,23],
    [59,15,28]
  ]
}
module.exports = Transaction
