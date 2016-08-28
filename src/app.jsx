import React, { Component, PropTypes } from 'react'
import Header from './components/Header.jsx';
import Transaction from './components/Transaction.jsx';
import { render } from 'react-dom'

// Load external modules
const Transaction = require('./components/Transaction.jsx')

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
        return (
          <div key={index} className="app-container__link" onClick={this._setCurrentChildComponentIndex.bind(this, index)}>
            {linkCaption}
          </div>);
      });

    return (
      <div className="app-container">
        <div className="app-container__links">
          {links}
        </div>

        <div className="app-container__child">
          {this._childComponents[this.state.currentChildComponentIndex].component}
        </div>
      </div>
    )
  }

  // Populate the child components here
  get _childComponents() {
    return [
      { linkCaption: 'Link 1', component: <div /> },
      { linkCaption: 'Link 2', component: <div /> }
    ]
  }

  _setCurrentChildComponentIndex(index) {
    this.setState({
      currentChildComponentIndex: index
    });
  }
}

render(<App />, document.getElementById('app'))
