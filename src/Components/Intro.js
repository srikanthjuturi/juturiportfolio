import React, { useState } from 'react'
import img from '../images/hero.png'
import './Intro.css'
import WorkIcon from '@mui/icons-material/Work';
import ContactMe from './ContactMe';
import Skills from './Skills';
import resume from './Srikanth.pdf'
export default function Intro() {
  const [show,setshow]=useState(true)

  return (
     <>
<div className="container" id='intro-div' >
  <div className="intro-child">
    <div className="intro-col-1" id='intro-mt'>
      <h3 className='hello'>Hello, </h3>
      <h1 className='im'> I'm <span className='name'>Srikanth</span></h1> 
      <h1> I am a Web Develper</h1>
    <p className='intro p-2'> I am a skilled and passionate Web Develper with exprience creating visually appealing and user-friendly websites.</p>
    <div className="hireme">
        <button className="btn   ps-4 pe-4" id='hiremebtn'>
                 <a href={resume} download='resume' style={{textDecoration:'none',color:'black'}}> <WorkIcon className='me-2 '/>   Hire Me</a>
        </button>
    </div>
    </div>
    <div className="intro-col-2 ">
      <img src={img} alt="srikanth" className='srikanth-img' />
    </div> 
  </div>
  <Skills/>
  {show ? <div className='showdiv'> <button className='showbtn mb-3' onClick={()=>{setshow(false)}}>Show More</button></div> :   <ContactMe />}
   
</div>

     </>
  )
}
