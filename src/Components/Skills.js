import React from 'react'
import './Skills.css'
import html from '../images/html.png'
import css from '../images/css.png'
import BOOSTSRAP from '../images/bootstrap.png'
import JS from '../images/js.png'
import react from '../images/react_js.jpeg'
import material  from '../images/mysql.png'
 
export default function Skills() {
  return (
     <>
     <h1 className='text-center'> What I do</h1>
     <p className='container text-center'>I am a skilled and passionate WebDevelper with exprience creating visually  
      appealing and user-friendly websites. <br />I am proficient in  HTML5, CSS3, BOOSTSRAP, JAVASCRIPT, REACT JS, MATERIAL UI And <br />little bit of MYSQL DataBase.</p>
         <div className="skillbars">

          <div className="skillbar">
            <img src={html} alt="html"  className='skillbaricons'/>
            <div className="skillcontent">
              <h3>HTML</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="skillbar">
            <img src={css} alt="html"  className='skillbaricons'/>
            <div className="skillcontent">
              <h3>CSS</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="skillbar">
            <img src={BOOSTSRAP} alt="html"  className='skillbaricons'/>
            <div className="skillcontent">
              <h3>BOOSTSRAP</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="skillbar">
            <img src={JS} alt="html"  className='skillbaricons'/>
            <div className="skillcontent">
              <h3>JAVASCRIPT</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="skillbar">
            <img src={react} alt="html"  className='skillbaricons'/>
            <div className="skillcontent">
              <h3>REACT JS</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="skillbar">
            <img src={material} alt="html"  className='skillbaricons'/>
            <div className="skillcontent">
              <h3>MYSQL</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
         </div>
     </>
    
  )
}
