import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts'; // Import CanvasJSReact library
import {  Card } from 'antd';
import './Chart.css'
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
render(){
    const options = {
        animatedEnabled:true,
      axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM",
        lineDashType: "dash",
        tickLength: 0,
        type: "dash"
      },
      axisY: {
        interval: 200,
        includeZero: true,
        lineDashType: "dash",
        tickLength: 0,
        type: "dash"
      },
      plotArea: {
        type: "linear",
        angle: 0,
        stops: [
          { color: "rgba(128, 0, 128, 1)", offset: 0 },
          { color: "rgba(255, 255, 255, 1)", offset: 1 }
        ]
      },
      data: [{
        type: "splineArea",
        color: "darkviolet",
        fillOpacity: 0.3,
        showInLegend: false,
        dataPoints: [
          { x: new Date(2023, 6), y: 400 },
          { x: new Date(2023, 7), y: 200 },
          { x: new Date(2023, 8), y: 800 },
          { x: new Date(2023, 9), y: 100 },
          { x: new Date(2023, 10), y: 400 },
          { x: new Date(2023, 11), y: 200 },
          { x: new Date(2023, 12), y: 800 },
          { x: new Date(2024, 0), y: 100 },
        ]
      }]
    };

    return (
      <div className='Chart'>
      <h2>Expense Statistics</h2>
      <Card>
      <div className='chartholder'>
        <CanvasJSChart  options={options} />
        </div>
        </Card>
      </div>
    );
  }
}

export default Chart;
