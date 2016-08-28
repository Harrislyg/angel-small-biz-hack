import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import MonthUtilities from '../helpers/MonthUtilities'

class MonthSlider extends Component {
  constructor(props) {
    super(props)

    this._onSliderValueChanged = this._onSliderValueChanged.bind(this);
  }

  static get propTypes() { return {
    onMonthChanged: PropTypes.func,
    currentMonth: PropTypes.number.isRequired
  }}

  render() {
    let monthLabelNodes = MonthUtilities.monthNames.map((monthName) => monthName.substr(0, 3)).map((monthNameAbbr, index) => {
      let classes = classNames('slider--month__label', { 'active': index === this.props.currentMonth })
      return <div className={classes} key={index} onClick={this._onMonthLabelClicked.bind(this, index)}>{monthNameAbbr}</div>
    });

    return (
      <div className="slider--month__container">
        <div className="slider--month__title">Time Travel</div>
        <input className="slider--month" type="range"
          min="0" max="11"
          value={this.props.currentMonth} step="1"
          onChange={this._onSliderValueChanged}
          ref={(s) => this._rangeSlider = s} />
        <div className="slider--month__labels">
          {monthLabelNodes}
        </div>
      </div>
    )
  }

  _onSliderValueChanged() {
    this.props.onMonthChanged(this._rangeSlider.value)
  }

  _onMonthLabelClicked(monthNumber) {
    this.props.onMonthChanged(monthNumber)
  }
}

export default MonthSlider
