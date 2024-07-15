import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import { useNavigate} from 'react-router-dom'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


export default function Navbar() {

const [isactive,setactive]=useState(false)
const [show,setshow]=useState(false)
const navigate=useNavigate()
 
useEffect(() => {
  function handleScroll() {
    if (window.scrollY > 100) {
      setactive(true);
    } else {
      setactive(false);
    }
  }

  window.addEventListener('scroll', handleScroll);
 
}, []);

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' ,
  });
}

  return (
    <div className=''>
        <nav className='navbarmenu' >
          
            <img src={logo} alt="logo" className='logo'onClick={()=>{navigate('/')}} />

            <div className="navlistitems">
              <div className="navitems"  onClick={()=>{navigate('/about')}}>About</div>
              <div className="navitems" onClick={()=>{navigate('/education')}}>Education</div>
              <div className="navitems" onClick={()=>{navigate('/projects')}}>Projects</div>
              <div className="navitems" onClick={()=>{navigate('/tasks')}}>Tasks</div>
             </div>
            
            <div className="contactbtn">
            <button className="navcontactbtn btn btn-warning" onClick={()=>{navigate('/contactme')}}>
                   <ChatBubbleOutlineIcon/> Contact   
            </button>
            </div>

          {/* mobile */}
               
                  <MenuIcon onClick={()=>{setshow(true)}} id='menu'/>
                  <div className="mnavlistitems" style={{display:show?'flex':'none'}}>
                    <Link className="mnavitems"  to='about' onClick={()=>{setshow(false)}}>About</Link>
                    <Link className="mnavitems"  to='education' onClick={()=>{setshow(false)}}>Education</Link>
                    <Link className="mnavitems"  to='projects' onClick={()=>{setshow(false)}}>Projects</Link>
                    <Link className="mnavitems"  to='tasks' onClick={()=>{setshow(false)}}>Tasks</Link>
                    <Link className="mnavitems"  to='contactme' onClick={()=>{setshow(false)}}>Contact Me </Link>
                  </div>
        </nav>

        {isactive && (<div className="to-top-ani active" onClick={scrollToTop}>
                    <ArrowUpwardIcon  className='scroll-icon' style={{zIndex:999}} />
                      </div>)}
    </div>
  )
}
