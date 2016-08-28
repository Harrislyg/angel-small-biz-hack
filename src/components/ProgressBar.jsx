

class ShowProgress React.createClass({
  render: function() {
    return (
      <div>
        <div id="show-progress-without-jsx">
          <ProgressNoJSX percentage={this.props.percentage}/>
        </div>
        <br />
        <div id="show-progress-with-jsx">
          <Progress percentage={this.props.percentage} />
        </div>
      </div>
    );
  }
});
