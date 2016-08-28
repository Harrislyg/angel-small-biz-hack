import React from 'react'
import { render } from 'react-dom'
var Transaction = require('./components/Transaction.jsx')


class App extends React.Component {
  render() {
    return (
      <div>
      <p>Hello World</p>
      <Transaction />
      </div>
    )
  }
}

render(<App />, document.getElementsByTagName('body')[0]);
