import React, { Component, PropTypes } from 'react'
import CurrencyFormatter from '../helpers/CurrencyFormatter'
import MonthUtilities from '../helpers/MonthUtilities'

import Line from './Line.jsx'
import MonthSlider from './MonthSlider.jsx'

import transactionData from '!json!../data/filtered.json'

class Overview extends Component {
  constructor(props) {
    super(props)

    let currentMonth = new Date().getMonth()

    this.state = {
      currentMonth: currentMonth,
      editingYourTarget: false,
      yourTargetAmount: 0,
      yourTargetMonth: currentMonth
    }

    // Binding methods
    this._onMonthSliderValueChanged = this._onMonthSliderValueChanged.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._endEditingYourTargetAmount = this._endEditingYourTargetAmount.bind(this);
  }

  // Data calculation
  _getInflowsAmountForMonth(month) {
    let filteredTransactions = transactionData.filter((d) => new Date(d.date).getMonth() === month)
      .filter((d) => d.type === 'inflow')
    return filteredTransactions.reduce((prev, current) => prev + current.deposits, 0)
  }

  _getOutflowsAmountForMonth(month) {
    let filteredTransactions = transactionData.filter((d) => new Date(d.date).getMonth() === month)
      .filter((d) => d.type === 'outflow')
    return filteredTransactions.reduce((prev, current) => prev + current.withdrawals, 0)
  }

  _getBalanceAmountForMonth(month) {
    let filteredTransactions = transactionData.filter((d) => new Date(d.date).getMonth() === month)
    let sortedTransactions = filteredTransactions.map((d) => { return { date: new Date(d.date).getDate(), balance: d.balance }})
      .sort((a, b) => b.date - a.date)
    let lastTransaction = sortedTransactions[0]
    return lastTransaction.balance
  }

  render() {
    let inflowsAmount = this._getInflowsAmountForMonth(this.state.currentMonth)
    let outflowsAmount = this._getOutflowsAmountForMonth(this.state.currentMonth)
    let yourBalanceAmount = this._getBalanceAmountForMonth(this.state.currentMonth)

    let statsItems = [{
      title: 'Inflows',
      currency: 'US$',
      amount: inflowsAmount,
      identifier: 'inflows'
    }, {
      title: 'Outflows',
      currency: 'US$',
      amount: outflowsAmount,
      identifier: 'outflows'
    }, {
      title: 'Your Balance',
      currency: 'US$',
      amount: yourBalanceAmount,
      subtitle: `in the month of ${MonthUtilities.monthNames[this.state.currentMonth]}`,
      identifier: 'your_balance'
    }, {
      title: 'Your Target',
      currency: 'US$',
      amount: this.state.yourTargetAmount,
      subtitle: `in the month of ${MonthUtilities.monthNames[this.state.yourTargetMonth]}`,
      identifier: 'your_target'
    }]

    let statsNodes = statsItems.map((statsData, index) => {
      let subtitleNode = '';
      if (statsData.subtitle && statsData.subtitle.trim().length > 0) {
        subtitleNode = <div className="overview__stats--subtitle">{statsData.subtitle}</div>;
      }

      let amountInnerNode = CurrencyFormatter.formatCurrency(statsData.amount);
      if (statsData.identifier === 'your_target') {
        if (this.state.editingYourTarget) {
          amountInnerNode = (
            <input
              type='number'
              onChange={this._handleChange}
              onKeyUp={this._onYourTargetChanged.bind(this)}
              onBlur={this._endEditingYourTargetAmount}
              value={this.state.yourTargetAmount}
              ref={(t) => this._yourTargetAmountField = t }
            />
          )
        } else {
          amountInnerNode = CurrencyFormatter.formatCurrency(this.state.yourTargetAmount)
        }
      }

      let amountNode = <div className="overview__stats--amount">{amountInnerNode}</div>
      if (statsData.identifier === 'your_target' && !this.state.editingYourTarget) {
        amountNode = <div className="overview__stats--amount" onClick={this._beginEditingYourTargetAmount.bind(this)}>{amountInnerNode}</div>
      }

      return (
        <div className="overview__stats--item" key={index} id={`overview__stats--${statsData.identifier}`}>
          <div className="overview__stats--title">{statsData.title}</div>
          <div className="overview__stats--currency">{statsData.currency}</div>
          {amountNode}
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
    })
  }

  _handleChange(event) {
    this.setState({
      yourTargetAmount: event.target.value
    })
  }

  _beginEditingYourTargetAmount() {
    this.setState({
      editingYourTarget: true
    })
  }

  _endEditingYourTargetAmount() {
    this.setState({
      editingYourTarget: false
    })
  }

  _onYourTargetChanged() {
    console.log(this._yourTargetAmountField.value);
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
