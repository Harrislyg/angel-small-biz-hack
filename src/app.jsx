import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return <p>Whatever</p>;
  }
}

render(<App />, document.getElementsByTagName('body')[0]);
