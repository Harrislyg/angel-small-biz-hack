import React from 'react';
import { render } from 'react-dom';
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

const appDiv = document.createElement('div');
appDiv.id = 'app';
document.body.appendChild(appDiv);

render(<App />, appDiv);
