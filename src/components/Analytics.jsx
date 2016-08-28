import React from 'react';
import { render } from 'react-dom';
import Header from './Header.jsx';
import Line from './Line.jsx';
import Bar from './Bar.jsx';
import BarChart2 from './BarChart2.jsx';
import Slider from './Slider.jsx';
import Goals from './Goals.jsx';
import Pie from './Pie.jsx';


class Analytics extends React.Component {
  	constructor(props) {
    super(props)
    this.state = {
      currentMonth: 8
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
  	this.setState({
      currentMonth: event.target.value
    });
  }


  render() {
    return (
      <div>
      <Header />
      <Goals />

      <Slider onClick={this.handleChange} currentMonth={this.state.currentMonth} />
      <Line />
      <Bar />
      <BarChart2 />
      <Pie />
      <p>Likes</p>
      </div>
    );
  }
}

export default Analytics;