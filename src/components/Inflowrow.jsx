var React = require('react')

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
          <td>
            {Math.round(this.props.inflowRow.deposits * 100) / 100}
          </td>
          <td>
            {Math.round(this.props.inflowRow.balance * 100) / 100}
          </td>
        </tr>
    )
  }
}

module.exports = Inflowrow
