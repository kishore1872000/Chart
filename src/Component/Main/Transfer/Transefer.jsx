import React from 'react'
import './Transefer.css'
import { Card } from 'antd';
import l1 from '../../../assets/l1.png'
import l2 from '../../../assets/l2.png'
import l3 from '../../../assets/l3.png'
import l4 from '../../../assets/l4.png'
function Transefer() {
    const cardStyle = {
        background: 'white',
        borderRadius: '33px'
    };
    return (
        <div className="Transefer">
            <h2>Data Transefer</h2>
            <Card style={cardStyle}>
                <div className="container">
                    <div className="p1p">
                        <img className='p1p' src={l1} alt="" />
                    </div>
                    <p>Livia Bater</p>
                    <p> Ceo</p>
                </div>
                <div className="container2">
                    <div className="p1p">
                        <img className='p1p' src={l2} alt="" />
                    </div>
                    <p>Livia Bater</p>
                    <p> Ceo</p>
                </div>
                <div className="container3">
                    <div className="p1p">
                        <img className='p1p' src={l3} alt="" />
                    </div>
                    <p>Livia Bater</p>
                    <p> Ceo</p>
                </div>
                <div className="container4">
                  <p>write amount</p>
                  <p>525.50</p>
                  <p>send</p>
                </div>
                <img className='point'src={l4}></img>
            </Card>
        </div>
    )
}

export default Transefer