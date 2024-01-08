import React from 'react'
import "./AboutBlog.css"
import line from "../../../common/img/line.png"
function AboutBlog() {
  
  return (
    <div className='aboutBlog'>
        <h1 className='aboutBlog-head'>
            This my Blog website
       </h1>
       <img  className="aboutBlog-line" src={line} alt=""/> 
        <div className='aboutBlog-main'>
      Here I'll be posting all my learing and awesome content related to programming, also do vist my another blog website <a href="https://blogproject-a042e.web.app/">click here.</a>
        </div>
    </div>
  )
}

export default AboutBlog