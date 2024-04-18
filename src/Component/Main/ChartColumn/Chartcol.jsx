import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';  // Import CanvasJSReact library
import {  Card } from 'antd';
import './Chartcol.css'
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chartcol extends React.Component {
  render() {
    const options = {
      animationEnabled: true,
      axisY: {
        includeZero: true,
      },
      axisX: {
        interval: 30,
      },
      dataPointWidth: 20,
      data: [
        {
          type: "column",
          name: "Deposit",
          color: "#1814F3",
          showInLegend: true,
          dataPointWidth: 20,
          dataPoints: [
            { label: "Sun", y: 100 },
            { label: "Mon", y: 200 },
            { label: "Tue", y: 300 },
            { label: "Wed", y: 400 },
            { label: "Thu", y: 500 },
            { label: "Fri", y: 100 },
            { label: "Sat", y: 200 },
          ]
        },
            {
              type: "column",
              name: "Deposit",
              color: "#1814F3",
              showInLegend: true,
              dataPointWidth: 20,
              dataPoints: [
                { label: "Sun", y: null },
                { label: "Mon", y: null },
                { label: "Tue", y: null },
                { label: "Wed", y: null },
                { label: "Thu", y: null },
                { label: "Fri", y: null },
                { label: "Sat", y: null },
              ]
            },
        {
          type: "column",
          name: "Withdraw",
          showInLegend: false,
          color: "#16DBCC",
          dataPointWidth: 20,
          dataPoints: [
            { label: "Sun", y: 50 },
            { label: "Mon", y: 100 },
            { label: "Tue", y: 200 },
            { label: "Wed", y: 300 },
            { label: "Thu", y: 400 },
            { label: "Fri", y: 60 },
            { label: "Sat", y: 50 },
          ]
        }
      ]
    };

    return (
      <div className='Chartcol'>
      <h2>Weekly Activites</h2>
          <Card>
        <CanvasJSChart className="c1"options={options} />
        </Card>
      </div>
    );
  }
}

export default Chartcol;
