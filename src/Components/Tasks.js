import React from 'react'
import cal from '../images/calculator-image.png'
import todoimage from '../images/Todo-image.png'
import counterimage from '../images/counter.png'
import loginimage from '../images/loginimage.png'
import tableimage from '../images/tableimage.png'
import soon from '../images/soon.png'
import './Tasks.css'
import { useNavigate } from 'react-router-dom'
export default function Tasks() {
  let navigate = useNavigate();

  const navigateto=()=>{
    navigate('/calculator')
  }
  const navigatetodo=()=>{
    navigate('/todo')
  }

  return (
    <>
   
    <h1 className='text-center text-warning task-main'>Real Time Tasks</h1>
    <div className='parent container mt-5 mb-5'>
        <div className='child'>
                <img src={cal} alt="" className='task-image' />
            <div className='task-content' >
            <div  onClick={navigateto} className='text-center view-button-task'>View</div>
            </div>
        </div>
        <div className='child'>
                <img src={todoimage} alt="" className='task-image' />
            <div className='task-content' >
            <div onClick={navigatetodo} className='text-center view-button-task'>View</div>
            </div>
        </div>
        <div className='child'>
                <img src={counterimage} alt="" className='task-image' />
            <div className='task-content' >
            <div onClick={()=>{navigate('/counter')}} className='text-center view-button-task'>View</div>
            </div>
        </div>
        <div className='child'>
                <img src={loginimage} alt="" className='task-image' />
            <div className='task-content' >
            <div onClick={()=>{navigate('/Login')}} className='text-center view-button-task'>View</div>
            </div>
        </div>
        <div className='child'>
                <img src={tableimage} alt="" className='task-image' />
            <div className='task-content' >
            <div onClick={()=>{navigate('/table')}} className='text-center view-button-task'>View</div>
            </div>
        </div>
        <div className='child'>
                <img src={soon} alt="" className='task-image' />
            <div className='task-content' >
            <div  className='text-center view-button-task'>View</div>
            </div>
        </div>
    </div>
    </>
  )
}
