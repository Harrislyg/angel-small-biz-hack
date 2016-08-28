var React = require('react')
var Outflow = require('./Outflow.jsx')
var Inflowrow = require('./Inflowrow.jsx')

class Inflow extends React.Component {

  constructor () {
    super()
    this.state = {
      inflowData: []
    }
  }

  getInflowData () {
      this.setState({
        inflowData: this.props.inflowData
      })
  }

  componentWillMount () {
    this.getInflowData()
  }

  render () {
    console.log(this.state.inflowData.CCTranHistoryResponseData.TransactionDetails.TransactionData)

    return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Status</th>
                <th>Deposits</th>
                <th>Balance</th>
              </tr>

              {this.state.inflowData.CCTranHistoryResponseData.TransactionDetails.TransactionData.map((inflowRow, i) => (<Inflowrow inflowRow={inflowRow} index={i} key={i}/>))}

            </thead>




        </table>
      </div>
    )
  }
}

module.exports = Inflow
