import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import logo from "../../../common/img/logo.png"
import { Link ,useNavigate} from "react-router-dom";

function Navbar() {
 
  return (
    <div className='navbar'>
             <Link to={"/"}  style={{ textDecoration: 'none' }}>

       <img className='navbar-logo' src={logo} alt=""/>  
        </Link>
       <ul  className='navbar-ul'>
       <Link to={"/category/ReactJs"}  style={{ textDecoration: 'none' }}>
         <li  className='navbar-li'>React js</li>
         </Link>
         <Link to={"/category/NodeJs"}  style={{ textDecoration: 'none' }}>
         <li  className='navbar-li'>Node js</li>
         </Link>
         <Link to={"/category/NextJs"} style={{ textDecoration: 'none' }} >
         <li  className='navbar-li'>Next js</li>
         </Link>
         <Link to={"/category/Others"}  style={{ textDecoration: 'none' }}>
         <li  className='navbar-li'>Others</li>
         </Link>
       </ul>
    </div>
  )
}

export default Navbar