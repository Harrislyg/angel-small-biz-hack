import React from 'react';
import { render } from 'react-dom';

class Slider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentMonth: 8
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      currentMonth: e.target.value
    });
  }

  render() {
    return (
      <div onChange={this.handleChange}>
      <input id="typeinp" type="range" min="1" max="12" step="1"/>
        {this.state.currentMonth}
      </div>
    );
  }
}

export default Slider;