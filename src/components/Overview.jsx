import React, { Component, PropTypes } from 'react'
import CurrencyFormatter from '../helpers/CurrencyFormatter'
import MonthUtilities from '../helpers/MonthUtilities'

import Line from './Line.jsx'
import MonthSlider from './MonthSlider.jsx'

class Overview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMonth: new Date().getMonth()
    }

    // Binding methods
    this._onMonthSliderValueChanged = this._onMonthSliderValueChanged.bind(this);
  }

  static get propTypes() { return {
    inflowsAmount: PropTypes.number.isRequired,
    outflowsAmount: PropTypes.number.isRequired,
    yourBalanceAmount: PropTypes.number.isRequired,
    yourTargetAmount: PropTypes.number.isRequired,
    yourBalanceMonth: PropTypes.number,
    yourTargetMonth: PropTypes.number
  }}

  static get defaultProps() { return {
    inflowsAmount: 0,
    outflowsAmount: 0,
    yourBalanceAmount: 0,
    yourTargetAmount: 0,
    yourBalanceMonth: new Date().getMonth(),
    yourTargetMonth: new Date().getMonth()
  }}

  render() {
    let statsItems = [{
      title: 'Inflows',
      currency: 'US$',
      amount: this.props.inflowsAmount,
      identifier: 'inflows'
    }, {
      title: 'Outflows',
      currency: 'US$',
      amount: this.props.outflowsAmount,
      identifier: 'outflows'
    }, {
      title: 'Your Balance',
      currency: 'US$',
      amount: this.props.yourBalanceAmount,
      subtitle: `in the month of ${MonthUtilities.monthNames[this.props.yourBalanceMonth]}`,
      identifier: 'your_balance'
    }, {
      title: 'Your Target',
      currency: 'US$',
      amount: this.props.yourTargetAmount,
      subtitle: `in the month of ${MonthUtilities.monthNames[this.props.yourTargetMonth]}`,
      identifier: 'your_target'
    }]

    let statsNodes = statsItems.map((statsData, index) => {
      let subtitleNode = '';
      if (statsData.subtitle && statsData.subtitle.trim().length > 0) {
        subtitleNode = <div className="overview__stats--subtitle">{statsData.subtitle}</div>;
      }

      return (
        <div className="overview__stats--item" key={index} id={`overview__stats--${statsData.identifier}`}>
          <div className="overview__stats--title">{statsData.title}</div>
          <div className="overview__stats--currency">{statsData.currency}</div>
          <div className="overview__stats--amount">{CurrencyFormatter.formatCurrency(statsData.amount)}</div>
          {subtitleNode}
        </div>
      );
    });

    return (
      <div className="overview__container">
        <MonthSlider currentMonth={this.state.currentMonth} onMonthChanged={this._onMonthSliderValueChanged} />
        <div className="overview__stats">
          {statsNodes}
        </div>
        <Line options={this._lineChartOptions} />
      </div>
    );
  }

  _onMonthSliderValueChanged(newValue) {
    this.setState({
      currentMonth: newValue
    });
  }

  get _lineChartOptions() { return {
    labels: {
      fontColor: "#565555",
      fontFamily: "'PT Sans', sans-serif",
      fontSize: 12
    }
  }}
}

module.exports = Overview;
