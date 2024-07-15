import React, {  useState } from 'react'
import './Calculator.css'
 

export default function Calculator() {
   
    let [inputvalue,setinput]=useState('')
    
    let handle=(value)=>{
        setinput(inputvalue+value)
    }
    let clear=()=>{
        setinput("")
    }
    let calculate=()=>{
           let final = eval(inputvalue)
           setinput(final)
    }
  return (
    <>
     <div className='calculator-div'>
    
     <div className='d-flex justify-content-center mt-5'>
        <input type="text" className='input' value={inputvalue}     />
     </div>
     <div className='buttons d-flex justify-content-center'>
       <button className="digit" onClick={()=>{handle('1')}}  >1</button>
       <button className="digit" onClick={()=>{handle('2')}}>2</button>
       <button className="digit" onClick={()=>{handle('3')}}>3</button> 
       <button className="operator" onClick={()=>{handle('/')}}>/</button>
     </div>
     <div className='buttons d-flex justify-content-center'>
       <button className="digit" onClick={()=>{handle('4')}}>4</button>
       <button className="digit" onClick={()=>{handle('5')}}>5</button>
       <button className="digit" onClick={()=>{handle('6')}}>6</button>
       <button className="operator" onClick={()=>{handle('+')}}>+</button>
     </div>
     <div className='buttons d-flex justify-content-center'>
       <button className="digit" onClick={()=>{handle('7')}}>7</button>
       <button className="digit" onClick={()=>{handle('8')}}>8</button>
       <button className="digit" onClick={()=>{handle('9')}}>9</button>
       <button className="operator" onClick={()=>{handle('-')}}>-</button>
     </div>
     <div className='buttons d-flex justify-content-center'>
       <button className="digit" onClick={()=>{handle('0')}} >0</button>
       <button className="digit" onClick={()=>{calculate()}}>=</button>
       <button className="digit" onClick={()=>{handle('*')}}>*</button>
       <button className="operator" onClick={()=>{clear()}}>clear</button>
     </div> 
     </div>
     
    
    </>
  )
}
