import React, { useState } from 'react'
import './Counter.css'
import { useRef } from 'react'

export default function Counter() {
    const color =useRef()
    const [count,setcount]=useState(0)
    const decrement=()=>{
        if(count<0){
            setcount(0)
        }else{
            setcount(count-1)
        }
    }


    const increment=()=>{
        if(count < 10){
            setcount(count+1)
        }else{
            
        }
    }

    const changecolor=(e)=>{
       color.current = e.target.value
       document.querySelector('.counter-main-div').style.background=color.current
    }
  return (
   <>
       
    <div className='counter-main-div'>
    <label htmlFor="color">you can change background color</label>
    <input type="color" name="color" id="color"  ref={color} onChange={changecolor}/>
        <h1>Counter</h1>
        <div className='d-flex mt-5'>
             <button className="decrement" onClick={decrement} disabled={count===0}>-</button>
            <h1 className="count">{count}</h1>
            <button className="increment" onClick={increment} disabled={count===10}>+</button>
        </div>

    </div>
   </>
  )
}
