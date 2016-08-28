import React from 'react';
import { render } from 'react-dom';

class Slider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentMonth: 8
    };
  }

  handleChange(){
    this.setState({
      currentMonth: e.target.value
    });
  }

  render() {
    return (
      <div>
      <input id="typeinp" type="range" min="0" max="5" value="3" step="1"/>
        {this.state.currentMonth}
      </div>
    );
  }
}

export default Slider;