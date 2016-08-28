var React = require('react')
var Outflowrow = require('./Outflowrow.jsx')
let filteredDate

class Outflow extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    // console.log('Inflow Data', this.state.inflowData)
    let date = this.props.sliderDate;
    console.log("this is the " + date)

    if (this.props.categoryOutflow == 'All') {
      filteredDate = this.props.outflowData.filter((a) => (new Date(a.date).getMonth() + 1 == date) && a.type == 'outflow')
    } else {
      filteredDate = this.props.outflowData.filter((a) => (new Date(a.date).getMonth() + 1 == date) && a.type == 'outflow' && a.category == this.props.categoryOutflow)
    }

    return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category<select onChange={this.props.onOutflow}>
                  <option value="All">All</option>
                  <option value="Inventory">Inventory</option>
                  <option value="Payroll">Payroll</option>
                  <option value="Rent and Utilities">Rent and Utilities</option>
                  <option value="Investing and Financing">Investing and Financing</option>
                  <option value="Miscellaneous">Miscellaneous</option>
                </select>
                </th>
                <th>Withdrawals</th>
                <th>Balance</th>
              </tr>

              {filteredDate.map((outflowRow, i) => (<Outflowrow outflowRow={outflowRow} index={i} key={i}/>))}

            </thead>

        </table>
      </div>
    )
  }
}

module.exports = Outflow
