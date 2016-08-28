var React = require('react')
var Inflow = require('./Inflow.jsx')
var Outflow = require('./Outflow.jsx')
import Slider from './Slider.jsx'
import Header from './Header.jsx'
import Goals from './Goals.jsx'
import Line from './Line.jsx'

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
    console.log('Transaction', transactionData)
    console.log(this.state.currentMonth)
    return (
      <div>
        <div>
        <Header />
        <Goals />
        <Slider onClick={this.handleChange} currentMonth={this.state.currentMonth} />
        <Line />
        <p>Likes</p>
        </div>
        <Inflow onSelect={this.handleSelect} category={this.state.category} inflowData={transactionData} sliderDate={this.state.currentMonth}/>
        <Outflow onOutflow={this.handleOutflow} categoryOutflow={this.state.categoryOutflow} outflowData={transactionData} sliderDate={this.state.currentMonth}/>
      </div>
    )
  }
}

module.exports = Transaction
