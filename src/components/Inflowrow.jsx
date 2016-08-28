var React = require('react')
import CurrencyFormatter from "../helpers/CurrencyFormatter.js"

class Inflowrow extends React.Component {
  render () {
    // console.log('inflowRow', this.props.inflowRow)
    return (
        <tr>
          <td>
            {this.props.inflowRow.date}
          </td>
          <td>
            {this.props.inflowRow.category}
          </td>
          <td className="currency">
            {CurrencyFormatter.formatCurrency(this.props.inflowRow.deposits)}
          </td>
          <td className="currency">
            {CurrencyFormatter.formatCurrency(this.props.inflowRow.balance)}
          </td>
        </tr>
    )
  }
}

module.exports = Inflowrow
