import React, { Component, PropTypes } from 'react'
import Analytics from './components/Analytics.jsx';
import { render } from 'react-dom'
import classNames from 'classnames'
import rd3 from 'react-d3';

// Load external modules
const Transaction = require('./components/Transaction.jsx')
const BarChart = require('./components/charts/BarChart.jsx')
const ProgressChart  = require('./components/charts/ProgressChart.jsx')
const DonutChart = require('./components/charts/DonutChart.jsx')

var PieChart = rd3.PieChart;
var pieData = [
  {label: 'Inventory', value: 20.0},
  {label: 'Payroll', value: 55.0},
  {label: 'Misc Exp', value: 25.0 }
];

// Load stylesheets
require('./scss/application.scss')

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // Initialize state to always open the first child
      currentChildComponentIndex: 0

    }
  }




  render() {
    let links = this._childComponents.map((componentInfo) => componentInfo.linkCaption)
      .map((linkCaption, index) => {
        let classes = classNames('app-container__link', { 'active': this.state.currentChildComponentIndex == index });

        return (
          <div key={index} className={classes}
            onClick={this._setCurrentChildComponentIndex.bind(this, index)}>
            {linkCaption}
          </div>);
      });

    return (
      <div className="app-container">
        <div className="app-container__links box container">
          {links}
        </div>



        <Analytics />
        <div className="app-container__child">
          {this._childComponents[this.state.currentChildComponentIndex].component}
        </div>


      </div>
    )
  }

  // Populate the child components here



  get _childComponents() {
    return [
      { linkCaption: 'Overview', component:<PieChart
  data={pieData}
  width={400}
  height={400}
  radius={100}
  innerRadius={20}
  title="Expenses Pie Chart"
/> },
      { linkCaption: 'Transaction', component: <ProgressChart /> },
      { linkCaption: 'Reaching your target', component: <div/> }
    ]
  }

  _setCurrentChildComponentIndex(index) {
    this.setState({
      currentChildComponentIndex: index
    });
  }
}

render(<App />, document.getElementById('app'))
