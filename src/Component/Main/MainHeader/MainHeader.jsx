import React from 'react'
import './MainHeader.css'
import { CiSearch,CiSettings} from "react-icons/ci";
import { LuBellDot } from "react-icons/lu";
import p1 from "../../../assets/p1.png"
function MainHeader() {
  return (
    <div className='MainHeader'>
      <h2>Overview</h2>
      <div className="Search">
         <CiSearch className='iconsearch'/>
         <p>Search for something</p>
      </div>
      <div className='setting'>
       <CiSettings className='iconsetting'/>
      </div>
      <div className='setting1'>
       <LuBellDot  className='LubellDOT'/>
      </div>
      <div className='profile'>
        <img src={p1} alt="" />
      </div>
    </div>
  )
}

export default MainHeader