import React from 'react'
import { Menu } from 'antd';
import './MainSidermenu.css'
import p2 from "../../../assets/p2.png"
import { IoHomeSharp } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdAccountBox } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { CiCreditCard2 } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiBankFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";

function MainSidermenu() {
  return (
    <div className='SideMenu'>
    <div className="mainheader">
      <img src={p2} alt="" />
      <p>BankDas.</p>
    </div>
    <div className='m12'>
    <Menu className='m14'
    items={[
      {
        label:"Dasbord",
        key:"/Main",
        icon:<IoHomeSharp style={{fontSize:24}}/>
      },
      {
        label:"Trasaction",
        key:"/Trasaction",
        icon:<FaMoneyBillTransfer style={{fontSize:24}} />
      },
      {
        label:"Account",
        key:"/Account",
        icon:<MdAccountBox  style={{fontSize:24}}/>
      },
      {
        label:"Investment",
        key:"/Investment",
        icon:<GiTakeMyMoney style={{fontSize:24}}/>
      },
      {
        label:"CreateCards",
        key:"/CreateCards",
        icon:<CiCreditCard2 style={{fontSize:24}}/>
      },
      {
        label:"Loans",
        key:"/Loans",
        icon:<GiReceiveMoney  style={{fontSize:24}}/>
      },
      {
        label:"Service",
        key:"/Service",
        icon:<MdOutlineDesignServices style={{fontSize:24}} />
      },
      {
        label:"MyPrivileges",
        key:"My Privileges",
        icon:<PiBankFill style={{fontSize:24}} />
      },
      {
        label:"Setting",
        key:"Setting",
        icon:<IoSettingsSharp style={{fontSize:24}}/>
      }
    ]}
    >
    </Menu>
    </div>
    </div>
  )
}

export default MainSidermenu