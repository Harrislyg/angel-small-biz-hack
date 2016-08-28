var React = require('react')
var Inflow = require('./Inflow.jsx')
var Outflow = require('./Outflow.jsx')

class Transaction extends React.Component {

  render () {
    return (
      <div>
        <Inflow />
        <Outflow />
      </div>
    )
  }
}

module.exports = Transaction
