import React from 'react';
import { render } from 'react-dom';
import Slider from './Slider.jsx';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>Gongcha's Economic Console</h1>
      <a href="">Overview</a>
      <a href="">Your Transactions</a>
      <a href="">Eaching Your Target</a>
      <Slider />
      </div>
    );
  }
}

export default Header;