import React, { useState } from 'react'
import './Form.css'

export default function Form(prop) {

 const [add,setadd]=useState(prop.initialdata) 
 const [error,seterror]=useState(false) 


 const changehanlder=(event)=>{

  const {name,value}=event.target;
  setadd({...add,[name]:value})


 }
  return (
    <div className='form-update'>
      <div className="form-layout">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className='form-control' value={add.name} onChange={changehanlder}/>
          {error && add.name==='' && <span className='text-danger'>enter name</span>}
        </div>
        <div className="form-group">
          <label htmlFor="price">price</label>
          <input type="text" name="price" id="price" className='form-control' value={add.price} onChange={changehanlder}/>
          {error && add.price==='' && <span className='text-danger'>enter price</span>}
        </div>
        <div className="form-group">
          <label htmlFor="categorey">categorey</label>
          <select name='categorey'id='categorey' className='form-control text-dark' value={add.categorey} onChange={changehanlder} >
            <option value=""></option>
            <option value='mobile'>Mobile</option>
            <option value="watch">Watch</option>
          </select>
          {error && add.categorey==='' && <span className='text-danger'>enter categorey</span>}
        </div>
        <button className="btn btn-danger float-end mt-3 " onClick={(e)=>{
          e.preventDefault()
          prop.close()}}>Cancel ✖ </button>
        <button className="btn btn-success float-end me-3 mt-3"  onClick={(e)=>{
            e.preventDefault()
            seterror(true)
            if( !!add.name && !!add.price && !!add.categorey){
              prop.adddata(add)
               
            }
            
        }} >Send ✔</button>
      </div>
    </div>
  )
}
