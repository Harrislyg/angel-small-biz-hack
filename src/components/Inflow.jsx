var React = require('react')
var Outflow = require('./Outflow.jsx')
var Inflowrow = require('./Inflowrow.jsx')
let filteredDate

class Inflow extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let date = this.props.sliderDate;
    console.log("this is the " + date)

  if (this.props.category == 'All') {
    filteredDate = this.props.inflowData.filter((a) => (new Date(a.date).getMonth() + 1 == date) && a.type == 'inflow')
  } else {
    filteredDate = this.props.inflowData.filter((a) => (new Date(a.date).getMonth() + 1 == date) && a.type == 'inflow' && a.category == this.props.category)
  }

    console.log('Outflow date', filteredDate)
    console.log(this.props.inflowData)

    return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category<select onChange={this.props.onSelect}>
                  <option value="All">All</option>
                  <option value="Cash from Operating Activities">Cash from Operating Activities</option>
                  <option value="Cash from Investments">Cash from Investments</option>
                  <option value="Cash from Financing Activities">Cash from Financing Activities</option>
                </select>
                </th>
                <th>Deposits</th>
                <th>Balance</th>
              </tr>

              {filteredDate.map((inflowRow, i) => (<Inflowrow inflowRow={inflowRow} index={i} key={i}/>))}

            </thead>

        </table>
      </div>
    )
  }
}

module.exports = Inflow
