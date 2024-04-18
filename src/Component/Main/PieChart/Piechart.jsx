import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts'; // Assuming you import CanvasJSReact correctly
import {  Card } from 'antd';
import './Piechart.css'
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Piechart extends Component {
    componentDidMount() {
        const chart = this.chart;
        if (chart) {
            const dataPoints = chart.options.data[0].dataPoints;
            dataPoints.forEach((dataPoint, index) => {
                dataPoint.exploded = index % 2 !== 0;
            });
            chart.options.animationEnabled = true; // Enable animation
            chart.options.animationType = 'easeOutSine';
            chart.render();
        }
    }

    render() {
        const options = {
            animationEnabled: false, // Let's control animation within componentDidMount
            exportFileName: "Expense Statistics",
            exportEnabled: false,
            data: [{
                type: "pie",
                showInLegend: false,
                legendText: "{label}",
                toolTipContent: "{label}: <strong>{y}%</strong>",
                indexLabel: "{y}% ({label})",
                indexLabelFontSize: 12,
                indexLabelLineThickness: 0,
                indexLabelMaxWidth: 80,
                indexLabelPlacement: "inside",
                indexLabelFontColor: "white",
                radius: "80%",
                innerRadius: "40%",
                dataPoints: [
                    { y: 35, label: "Others", color: "blue" },
                    { y: 20, label: "Investment", color: "#E316DD" },
                    { y: 30, label: "Entertainment", color: "darkblue" },
                    { y: 15, label: "Bill Expense", color: "orange" }
                ]
            }]
        };

        return (
            <div className='Piechart'>
            <h2>Expense Statstics</h2>
            <Card>
                <CanvasJSChart options={options} className="c2" onRef={ref => this.chart = ref} />
                </Card>
            </div>
        );
    }
}

export default Piechart;
