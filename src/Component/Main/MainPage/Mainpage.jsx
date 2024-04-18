import React from 'react';
import {  Card, Space } from 'antd';
import { FiDollarSign } from 'react-icons/fi';
import p3 from '../../../assets/p3.png';
import p5 from '../../../assets/Group.png';
import './Mainpage.css';

function Mainpage() {
  const cardStyle = {
    background: 'linear-gradient(to right, #4C49ED, #0A06F4)',
    borderRadius: '33px'
  };

  return (
    <div className='Mainpage'>
      <p className='page'>My Cards</p>
      <Card style={cardStyle}>
        <Space>
          <FiDollarSign className='Sign' />
          <div className="balance">
            <p>Balance</p>
            <p>5,756</p>
          </div>
          <img src={p3} alt='' />
          <div className='holdername'>
            <p>CARD HOLDER</p>
            <p>Eddy Cusuma</p>
          </div>
          <div className='holdername2'>
            <p>VALID THRU</p>
            <p>12/12</p>
          </div>
          <div className="NUM">
            <p>3778 **** **** 1234</p>
            <img src={p5} alt="" />
          </div>
        </Space>
      </Card>
    </div>
  );
}

export default Mainpage;
