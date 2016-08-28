var React = require('react')
import CurrencyFormatter from '../helpers/CurrencyFormatter.js'

class Outflowrow extends React.Component {
  render () {
    return (
        <tr>
          <td>
            {this.props.outflowRow.date}
          </td>
          <td>
            {this.props.outflowRow.category}
          </td>
          <td className="currency">
            {CurrencyFormatter.formatCurrency(this.props.outflowRow.withdrawals)}
          </td>
          <td className="currency">
            {CurrencyFormatter.formatCurrency(this.props.outflowRow.balance)}
          </td>
        </tr>
    )
  }
}

module.exports = Outflowrow
