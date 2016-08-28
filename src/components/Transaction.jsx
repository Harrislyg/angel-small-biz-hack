var React = require('react')
var Inflow = require('./Inflow.jsx')
var Outflow = require('./Outflow.jsx')
import Slider from './Slider.jsx'
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

  handleChange (event) {
    this.setState({
      currentMonth: event.target.value
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

    console.log('Transaction', transactionData)
    console.log(this.state.currentMonth)
    return (
      <div>
        <div>
        <Slider onClick={this.handleChange} currentMonth={this.state.currentMonth} />
        </div>

        <InflowPie data={inflow} month={this.state.currentMonth} />
        <Inflow onSelect={this.handleSelect} category={this.state.category} inflowData={transactionData} sliderDate={this.state.currentMonth}/>

        <OutflowPie data={outflow} month={this.state.currentMonth} />
        <Outflow onOutflow={this.handleOutflow} categoryOutflow={this.state.categoryOutflow} outflowData={transactionData} sliderDate={this.state.currentMonth}/>
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
