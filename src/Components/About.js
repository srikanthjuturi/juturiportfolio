import React from 'react'
import img from '../images/srikanth2.png'
import img1 from '../images/img-bg.png'
import './About.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import mysql from '../images/mysql.png'
import reactimg from '../images/r.png'
import bootstrap from '../images/bootstrap.png'
import material from '../images/MATERIAL-UI.png'
 

export default function About() {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
     <>
         <div className='container'>
       <div className="row  " id='about-me-1'>
        <div className="col-md-7 col-sm-12 ">
          <h1 className='about-heading'>About <span>Me</span></h1>
          <ul>
          <li><p>I'm Srikanth.Juturi. I am from Andhara Pradesh in Palnadu district at challagundla addaroad.</p></li>
          <li><p>I completed my Bachelor's degree in Vagdevi Degree College, Narasaraopet in 2023 Auguest in the stream of B.sc (computer science)
                 Graduated with a CGPA of 8.0.</p></li>
          </ul>
        </div>
        <div className="col-md-5 col-sm-12 image-main-div">
          <img src={img1} alt="img"  className='img-1'/>
          <img src={img} alt="img"  className='img-2 rounded-circle' style={{width:'450px'}} />
        </div>
       </div>
       </div>
       <div className="slider-container container ">
       <h1 className='about-heading'>Skills</h1>
      <Slider {...settings}>
        <div className='text-center' >
          <img src={html} alt="html"  className='scroll-img'/>
        </div>
        <div className='text-center'>
          <img src={css} alt="html"   className='scroll-img'/>
        </div>
        <div className='text-center'>
          <img src={js} alt="html"   className='scroll-img'/>
        </div>
        <div className='text-center'>
          <img src={bootstrap} alt="html"   className='scroll-img'/>
        </div>
        <div className='text-center'>
          <img src={reactimg} alt="html"   className='scroll-img'/>
        </div>

        <div className='text-center'>
          <img src={mysql} alt="html"   className='scroll-img'/>
        </div>
        <div className='text-center'>
          <img src={material} alt="html"   className='scroll-img'/>
        </div>
       
      </Slider>
    </div>

       <div className="container Experience">
        <h1 className='about-heading'>Experience</h1>
        <ul>
            <li><p>I am working as a jr.fronted developer at GRCTOB. I have 4 months of experience in react
                    js and frontend development</p></li>
            <li><p>I worked in online trucks booking website. In that I developed the responsive designs
                    according to my senior said.
</p></li>
          </ul>
       </div>
       <div className="container acheivments">
       <h1 className='about-heading'>Achievements</h1>
        <ul>
            <li><p>Qualified in national mains merit scholarship in my primary education.</p></li>
            <li> <p>completed the TCS youth employment training program in my college.I
                      also got a certificate from it</p></li>
            <li><p>certified from MS-office.</p></li>
            <li>I got certificates in kabaddi and running.</li>
          </ul>
       </div>
       
       <div className="container strength">
        <h1 className='about-heading'>Strengths</h1>
        <ul>
            <li><p>Good Patience.</p></li>
            <li> <p>I never give up when the problem is difficult.</p></li>
            <li><p>Quick Learner</p></li>
          </ul>
       </div>
     
     </>
  )
}
