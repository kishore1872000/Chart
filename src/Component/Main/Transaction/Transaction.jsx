import React from 'react'
import './Tranaction.css'
import {  Card } from 'antd';
import g1 from '../../../assets/g1.png'
import g2 from '../../../assets/g2.png'
import g3 from '../../../assets/g3.png'
function Transaction() {
  const cardStyle = {
    background: 'white',
    borderRadius: '33px'
  };
  return (
    <div className='Transaction'>
    <p className='page'>Recent Transaction</p>
      <Card style={cardStyle}>
      <div className="t1">
      <img src={g1} alt="" />
      <p> Deposit from my Car</p>
      <p>28 January 2021</p>
      <p>-850</p>
      </div>
      <div className="t2">
      <img src={g2} alt="" />
      <p> Deposit Paypal</p>
      <p>25 January 2021</p>
      <p>+2,500</p>
      </div>
      <div className="t3">
      <img src={g3} alt="" />
      <p> Jemi Wilson</p>
      <p>21 January 2021</p>
      <p>+5,400</p>
      </div>
      </Card>
    </div>
  )
}

export default Transaction