var React = require('react')
var Inflow = require('./Inflow.jsx')
var Outflow = require('./Outflow.jsx')
import transactionData from 'json!../data/transaction.json'

class Transaction extends React.Component {

  render () {
    console.log(transactionData)
    return (
      <div>
        <Inflow />
        <Outflow />
      </div>
    )
  }
}

module.exports = Transaction
