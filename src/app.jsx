import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'

// Load external modules
import Analytics from './components/Analytics.jsx'
import Transaction from './components/Transaction.jsx'
import Overview from './components/Overview.jsx'
import ReachingTarget from './components/ReachingTarget.jsx'

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

        <div className="app-container__child box container">
          {this._childComponents[this.state.currentChildComponentIndex].component}
        </div>
      </div>
    )
  }

  // Populate the child components here
  get _childComponents() {
    return [
      { linkCaption: 'Overview', component:<Overview /> },
      { linkCaption: 'Transaction', component: <Transaction /> },
      { linkCaption: 'Reaching Your Target', component: <ReachingTarget /> }
    ]
  }

  _setCurrentChildComponentIndex(index) {
    this.setState({
      currentChildComponentIndex: index
    });
  }
}

render(<App />, document.getElementById('app'))
