var React = require('react')

class Inflowrow extends React.Component {
  render () {
    return (
        <tr>
          <td>
            {this.props.inflowRow.TransactionType}
          </td>
          <td>
            {this.props.inflowRow.TransactionType}
          </td>
          <td>
            {this.props.inflowRow.TransactionType}
          </td>
          <td>
            {this.props.inflowRow.TransactionType}
          </td>
          <td>
            {this.props.inflowRow.TransactionType}
          </td>
          <td>
            {this.props.inflowRow.TransactionType}
          </td>
        </tr>
    )
  }
}

module.exports = Inflowrow
