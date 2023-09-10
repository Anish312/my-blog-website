import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import logo from "../../../common/img/logo.png"

function Navbar() {
 
  return (
    <div className='navbar'>
       <img className='navbar-logo' src={logo} alt=""/>
       <ul  className='navbar-ul'>
         <li  className='navbar-li'>Home</li>
         <li  className='navbar-li'>Contact me</li>

       </ul>
    </div>
  )
}

export default Navbar