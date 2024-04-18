import React from 'react'
import {  Card, Space } from 'antd';
import { FiDollarSign } from 'react-icons/fi';
import p3 from '../../../assets/p3.png';
import p5 from '../../../assets/Group.png';
import './Mainpage1.css';
function MainPage1() {
  const cardStyle = {
    background: 'white',
    borderRadius: '33px'
  };

  return (
    <div className='Mainpage1'>
      <p className='page1'>See all</p>
      <Card style={cardStyle}>
        <Space>
          <FiDollarSign className='Sign1' />
          <div className="balance1">
            <p>Balance</p>
            <p>5,756</p>
          </div>
          <img src={p3} alt='' />
          <div className='holdername4'>
            <p>CARD HOLDER</p>
            <p>Eddy Cusuma</p>
          </div>
          <div className='holdername3'>
            <p>VALID THRU</p>
            <p>12/12</p>
          </div>
          <div className="NUM1">
            <p>3778 **** **** 1234</p>
            <img src={p5} alt="" />
          </div>
        </Space>
      </Card>
    </div>
  );
}


export default MainPage1