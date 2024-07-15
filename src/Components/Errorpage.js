import React from 'react'
import errorpage from '../images/errorpage.png'

export default function Errorpage() {
  return (
    <div>
      <img src={errorpage} alt="error" style={{objectFit:'cover',height:'100vh',width:'100%'}} />
    </div>
  )
}
