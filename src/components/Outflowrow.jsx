var React = require('react')

class Outflowrow extends React.Component {
  render () {
    // console.log('inflowRow', this.props.inflowRow)
    return (
        <tr>
          <td>
            {this.props.outflowRow.date}
          </td>
          <td>
            {this.props.outflowRow.category}
          </td>
          <td>
            {Math.round(this.props.outflowRow.withdrawals * 100) / 100}
          </td>
          <td>
            {Math.round(this.props.outflowRow.balance * 100) / 100}
          </td>
        </tr>
    )
  }
}

module.exports = Outflowrow
