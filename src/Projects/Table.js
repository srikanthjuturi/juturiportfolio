import React, { useState } from 'react'
import './Table.css'
import Form from './Form'
 

export default function Table(prop) {
 
  return (
  <>
    <div className='table-responsive container table-div'> 
      <button className='float-end btn btn-primary m-3' onClick={()=>{prop.open()}}>ADD PRODUCT</button>
      {
       prop.isFormOpen && <Form  close={prop.close} initialdata={prop.initialdata} adddata={prop.adddata}/>
        }
      <table className='w-100 table table-striped table-hover table-lg table-warning table-border '>
        <thead>
          <tr>
            <th className='bg-warning'>S.NO</th>
            <th className='bg-warning'>NAME</th>
            <th className='bg-warning'>CATEGEROY</th>
            <th className='bg-warning'>PRICE</th>
            <th className='bg-warning'>EDIT</th>
            <th className='bg-warning'>DELETE</th>
          </tr>
          </thead>
          <tbody>
            {prop.products.map((data,i)=>(
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.categorey}</td>
                <td>{data.price}</td>
                <td><button className='btn btn-primary' onClick={()=>{prop.edit(data)}}>EDIT</button></td>
                <td><button className='btn btn-danger' onClick={()=>{prop.delete(data.id)}}>DELETE</button></td>
              </tr>
             ))}
          </tbody>
      </table>
      </div>
     </>
  )
}
