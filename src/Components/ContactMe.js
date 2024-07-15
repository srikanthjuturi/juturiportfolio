import React, { useState } from 'react'
import './ContactMe.css'
import emailjs from '@emailjs/browser';
 

export default function ContactMe() {


  const [formdata,setformdata]= useState({name:'',email:'',message:''})
  const changevent=(e)=>{
     let  {name,value} = e.target;
     setformdata({...formdata,[name]:value})
  }
  const submitdata=(e)=>{
    e.preventDefault()
    console.log(formdata)
    emailjs.sendForm('service_dod5gd8', 'template_vcr31gl', formdata, 'FXHRYRpNTz71Aukkb')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error);
    });
 
  }
  return (
    <>
    <div className='contact-me' >
   
     <form className='contact-form'>
     <h1 className='text-center mt-5'>CONTACT ME</h1>
     <p className='text-center '>Please fill out the form below to discuss any work opportunities</p>
        <div className='input-size'> 
        <input type="text" name="name" id="name" placeholder='Your Name' className='form-control' value={formdata.name} onChange={changevent} />
        </div>
        <div className='input-size'>
        <input type="email" name="email" id="email" placeholder='Your Email' className='form-control' value={formdata.email} onChange={changevent}/>
        </div>
        <div className='input-size'>
       <textarea name="message" id="message" rows={5} placeholder='Your Message' className='form-control' value={formdata.message} onChange={changevent}></textarea>
       </div>
       <div className='input-size'>
       <button className='btn btn-warning mt-2 ps-5 pe-5' onClick={submitdata}>Submit</button>
       </div>
     </form>
     </div>
    
     
    </>
  )
}
