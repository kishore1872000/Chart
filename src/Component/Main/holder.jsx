import React from 'react'
import './Mainholder.css'
import { Space } from 'antd';
import Mainpage from './MainPage/Mainpage'
import MainPage1 from './MainPage1/MainPage1';
import Piechart from './PieChart/Piechart'
import Chart from './Chart/Chart';
import Chartcol from './ChartColumn/Chartcol';
import Transaction from './Transaction/Transaction';
import Transefer from './Transfer/Transefer';
function Mainholder() {
  return (
    <div className="mainholder">
    <Space className="SideMenuAndPageContent">
    <Mainpage></Mainpage>
    <MainPage1></MainPage1>
    <Transaction/>
    <Chartcol/>
    <Piechart/>
    <Transefer/>
    </Space>
    <Chart/>
    </div>
  )
}

export default Mainholder