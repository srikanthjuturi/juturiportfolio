import React from 'react'
import foodmunch from '../images/foodmunch.png'
import events from '../images/bookevents.png'
import donate from '../images/help2children.png'
import trailer from '../images/trailer.png'
import retail from '../images/retailimage.png'
import soon from '../images/soon.png'
import simple from '../images/simpleshop.png'
import './Project.css'
export default function Projects() {
  return (
    <>
     
    <div className='project-parent mb-5 container'>
        <div className='project-child'>
           <img src={foodmunch} alt="foodimage" className='project-img' />
           <div className='project-View'>
            <a href="https://srikanthjuturi.github.io/onlinefoodorder/">View</a>
           </div>
        </div>
        <div className='project-child'>
           <img src={trailer} alt="travel" className='project-img' />
           <div className='project-View'>
            <a href="https://trailertime.netlify.app">View</a>
           </div>
        </div>
        <div className='project-child'>
           <img src={donate} alt="foodimage" className='project-img' />
           <div className='project-View'>
            <a href=" https://srikanthjuturi.github.io/help2childern/">View</a>
           </div>
        </div>
        <div className='project-child'>
           <img src={retail} alt="retail" className='project-img' />
           <div className='project-View'>
            <a href="https://retailmarketing.netlify.app">View</a>
           </div>
        </div>
        <div className='project-child'>
           <img src={simple} alt="retail" className='project-img' />
           <div className='project-View'>
            <a href="https://srikanthjuturi.github.io/simplestore">View</a>
           </div>
        </div>
        <div className='project-child'>
           <img src={events} alt="retail" className='project-img' />
           <div className='project-View'>
            <a href="https://srikanthjuturi.github.io/bookevents/">View</a>
           </div>
        </div>
        <div className='project-child'>
           <img  src={soon} alt="soon" className='project-img'    />
           <div className='project-View'>
            <a href="#">Coming soon</a>
           </div>
        </div>
    </div>
    </>
  )
}
