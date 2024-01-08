import React from 'react'
import "./LandingCategory.css"
import line from "../../../common/img/line.png"

function LandingCategory() {
  return (
    <div className='landingCategory-main'>
          <div className='landingCategory-container'>
            
      
        <div className='landingCategory'>  
          <div className='landingCategory-head'>
             <h1>Explore Category</h1>
             <img  className="landingCategory-line1" src={line} alt=""/> 

        </div>
            <div className='landingCategory-left-box'>
            <div  className='landingCategory-left-image-container'>

               <img className='landingCategory-left-image' src="https://this.deakin.edu.au/wp-content/uploads/2019/06/coding-on-a-computer.jpg" alt=""/>
               </div>

               <div className='landingCategory-left-box-details'>
                 <h3>React js</h3>
                 <div className='landingCategory-left-box-details-line'>
                    
                 </div>
                 <p className='landingCategory-left-box-details-p'>In the world of website making, speed and responsiveness are super
                     important. When you visit a website, you want it to load right? But […]</p>
               </div>
            </div>
        </div> 
        </div>
        <div className='landingCategory-line'>
         
        </div>
        <div className='landingCategory-right'>
        <div className='landingCategory-right-box'>
            <div  className='landingCategory-right-image-container'>
                               <img className='landingCategory-right-image' src="https://th.bing.com/th/id/OIP.CjSHaXHwZ_xi-LgC1P2TpgAAAA?pid=ImgDet&rs=1" alt=""/>

            </div>
               <div className='landingCategory-right-box-details'>
                 <h3>React js</h3>
                 <div className='landingCategory-right-box-details-line'>
                    
                 </div>
                 <p className='landingCategory-right-box-details-p'>In the eed and responsiveness are super
                    But […]</p>
               </div>
            </div>
            <div className='landingCategory-right-box'>
               <img className='landingCategory-right-image' src="https://thumbs.dreamstime.com/b/python-programming-language-isometric-illustration-building-program-colorful-shows-young-developers-using-235344480.jpg" alt=""/>
               <div className='landingCategory-right-box-details'>
                 <h3>React js</h3>
                 <div className='landingCategory-right-box-details-line'>
                    
                 </div>
                 <p className='landingCategory-right-box-details-p'>In  speed and responsiveness are super
            But […]</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default LandingCategory