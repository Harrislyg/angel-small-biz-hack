import React, { Component } from 'react'
import CurrencyFormatter from '../helpers/CurrencyFormatter'

class Overview extends Component {
  render() {
    let statsItems = [
      { title: 'Inflows', currency: 'US$', amount: 3000, identifier: 'inflows' },
      { title: 'Outflows', currency: 'US$', amount: 4000, identifier: 'outflows' },
      { title: 'Your Balance', currency: 'US$', amount: 5000, identifier: 'your_balance' },
      { title: 'Your Target', currency: 'US$', amount: 6000, identifier: 'your_target' },
    ]

    let statsNodes = statsItems.map((statsData, index) => {
      return (
        <div className="overview__stats--item" key={index} id={`overview__stats--${statsData.identifier}`}>
          <div className="overview__stats--title">{statsData.title}</div>
          <div className="overview__stats--currency">{statsData.currency}</div>
          <div className="overview__stats--amount">{CurrencyFormatter.formatCurrency(statsData.amount)}</div>
        </div>
      );
    });

    return (
      <div className="overview__container">
        <div className="overview__stats">
          {statsNodes}
        </div>
      </div>
    );
  }
}

module.exports = Overview;
