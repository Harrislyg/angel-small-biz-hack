import React from 'react'; 

class ProgressChart extends React.Component {
    constructor(props) {
        super(props);
        this.width: 200,
        this.height: 200,
        this.chartId: 'v_chart',

        this.state = {
        percent: 0;
        }
        this.updateData = this.updateData.bind(this);

    }

    updateData() {
        return 
    }

     render() {
    return <div>
      <h1>Playing With React and D3</h1>
      <ScatterPlot {...this.state} {...styles} />
      <div className="controls">
        <button className="btn randomize" onClick={() => this.randomizeData()}>
          Randomize Data
        </button>
      </div>
    </div>
  }
}

export default ;



var ProgressChart=React.createClass({
    propTypes: {
        width:React.PropTypes.number,
        height:React.PropTypes.number,
        chartId:React.PropTypes.string
    },
 
    getDefaultProps: function() {
        return {
            width: 200,
            height: 200,
            chartId: 'v_chart'
        };
    },
    getInitialState:function(){
        return {percent:0};
    },
    componentWillMount(){
 
        this.setState({percent:.87});
    },
    componentWillUnmount:function(){
 
    },
    updateData:function(){
 
        var value=(Math.floor(Math.random() * (80) + 10))/100;
 
        this.setState({percent:value});
    },
    render:function(){
 
        var color = ['#404F70','#67BAF5','#2d384d'];
 
        var outerRadius=(this.props.height/2)-10;
        var innerRadius=outerRadius-20;
 
        var arc=d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(0)
            .endAngle(2*Math.PI);
 
        var arcLine=d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .cornerRadius(20)
            .startAngle(-0.05);
 
        var transform='translate('+this.props.width/2+','+this.props.height/2+')';
        var style1={
            filter:'url(#inset-shadow1)'
        };
        var style2={
            filter:'url(#inset-shadow2)'
        };
        var styleText= {
            'fontSize': '40px'
        };
        return (
            <div>
                <svg id={this.props.chartId} width={this.props.width}
                     height={this.props.height} onClick={this.updateData}>
 
                    <g transform={transform}>
                        <InsetShadow id="inset-shadow1" stdDeviation="5" floodColor="black" floodOpacity=".5"/>
                        <InsetShadow id="inset-shadow2" stdDeviation="1" floodColor="white" floodOpacity=".5"/>
 
                        <path fill={color[0]} d={arc()} style={style1}></path>
                        <path fill={color[1]} d={arcLine({endAngle:(2*Math.PI)*this.state.percent})}
                              style={style2}></path>
                        <circle r={innerRadius} cx="0" cy="0"
                                fill={color[2]} fillOpacity="1"/>
                        <text textAnchor="middle" dy="15" dx="5" fill={d3.rgb(color[1]).brighter(2)}
                            style={styleText}>{this.state.percent*100+'%'}</text>
                    </g>
                </svg>
            </div>
        );
    }
});
 
window.ProgressChart=ProgressChart;