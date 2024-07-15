import React, { useState } from 'react'
import './Login.css'

export default function Login() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [error,seterror]=useState({email:'',password:''});

    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    function formhalder(event) {
        event.preventDefault()
        if(email.trim()===''){
            seterror((error)=>({...error,email:'Enter email'}))
        }
        else if(!pattern.test(email)){
            seterror((error)=>({...error,email:'Enter valid  email'}))

        }
        else{
            seterror((error)=>({...error,email:''}))
        }

        if(password.trim()===''){
            seterror((error)=>({...error,password:'Enter password'}))
        }
        else if(password.trim().length < 8){
            seterror((error)=>({...error,password:'Enter Maximum 8 characters'}))

        }
        else{
            seterror((error)=>({...error,password:''}))
            setemail('')
            setpassword('')
            alert('form Submitted')
        }
         
    }
  return (
     <>
     <div className='form-main-div'>
        {/* <h1>Login Form</h1> */}
        <div className=' form-inner-div'>
        <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className='form-control' id="email" value={email} onChange={(e)=>{setemail(e.target.value)}}  placeholder='Enter Email'/>
            {error.email && <span className='text-warning'>{error.email}</span> }
        </div>
        <div className='form-group'>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter password' />
            {error.password && <span className='text-warning'>{error.password}</span> }
         </div>
        <button className='btn btn-primary text-center w-100 mt-4' onClick={formhalder}>submit</button>
         </div>
     </div>
      
     </>
  )
}
