import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header.jsx';
import Transaction from './components/Transaction.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
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
