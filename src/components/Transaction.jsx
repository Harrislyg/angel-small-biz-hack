var React = require('react')
var Inflow = require('./Inflow.jsx')
var Outflow = require('./Outflow.jsx')
import transactionData from 'json!../data/filtered.json'

class Transaction extends React.Component {



  render () {
    console.log('Transaction', transactionData)
    return (
      <div>
        <Inflow inflowData={transactionData}/>
        <Outflow />
      </div>
    )
  }
}

module.exports = Transaction
