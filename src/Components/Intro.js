import React, { useState } from 'react'
import img from '../images/srikanth.png'
import './Intro.css'
import WorkIcon from '@mui/icons-material/Work';
import ContactMe from './ContactMe';
import Skills from './Skills';
import Test from './Test.pdf.pdf'
export default function Intro() {
  const [show,setshow]=useState(true)

  return (
     <>
<div className="container" id='intro-div' >
  <div className="row">
    <div className=" col-sm-12 col-md-7" id='intro-mt'>
      <h3 className='hello'>Hello, </h3>
      <h1 className='im'> I'm <span className='name'>Srikanth</span></h1> 
      <h1> I am a Web Develper</h1>
    <p className='intro p-2'> I am a skilled and passionate Web Develper with exprience creating visually appealing and user-friendly websites.</p>
    <div className="hireme">
        <button className="btn   ps-4 pe-4" id='hiremebtn'>
                 <a href={Test} download='resume' style={{textDecoration:'none',color:'black'}}> <WorkIcon className='me-2 '/>   Hire Me</a>
        </button>
    </div>
    </div>
    <div className="col-md-5 col-sm-12  d-md-block  d-none">
      <img src={img} alt="srikanth" className='srikanth-img' />
    </div> 
  </div>
  <Skills/>
  {show ? <div className='showdiv'> <button className='showbtn mb-3' onClick={()=>{setshow(false)}}>Show More</button></div> :   <ContactMe />}
   
</div>
     </>
  )
}
