import React from 'react'
// import { Space } from 'antd';
import MainHeader from './MainHeader/MainHeader'
import MainSidermenu from './MainSidermenu/MainSidermenu'
// import Mainpage from './MainPage/Mainpage'
// import MainPage1 from './MainPage1/MainPage1';
// import Piechart from './PieChart/Piechart'
// import Chart from './Chart/Chart';
// import Chartcol from './ChartColumn/Chartcol';
import Mainholder from './holder';
function Main() {
  return (
    <div className='Main'>
    <MainHeader/>
    <MainSidermenu></MainSidermenu>
    <Mainholder/>
    </div>
  )
}

export default Main