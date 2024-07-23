import React, { useState } from 'react'
import './Todo.css'

export default function Todo() {
 
    let [newtodo,setnewtodo]=useState('')
    let [todolist,settodolist]=useState(
    [

        {
        id:1,
        name:'Learn HTML'
        },

        {
            id:2,
            name:'Learn React'
        }

]
   )


let  [todoid,settodoid]=useState(2)

 
const submithalder=(e)=>{
    e.preventDefault()
    
    if(newtodo===''){
        alert('Enter Something To Add')
    }
    else{
        settodoid(todoid++)
     let todo= [...todolist,{id:todoid, name:newtodo}]
     settodolist(todo)
     setnewtodo('')
    
    }

}

function deletetodo(id){
  let updatedtodo =  todolist.filter((todo)=>{
        return todo.id!==id 
    })
    settodolist(updatedtodo)
   
}

  return (
     <>
     <div className='todo-div'>
        <h1 className='text-center text-warning'>Todo List App</h1>
     </div>
     <div className='todo-body mt-5'> 
     <div className='input-group container  '>
        <input type="text"  className='form-control' value={newtodo} onChange={(e)=>{setnewtodo(e.target.value)}} placeholder='Enter Your Text'/>
        <button className='btn bg-warning' onClick={submithalder}>ADD</button>
     </div>
     <div className='container mt-5  list-group-div'>
        <ul className='list-group'>
            {todolist.map((todo,index)=>{
                return(
                    <li className='list-group-item' key={index}> 
                    <h5>{todo.name}</h5>
                    <button className='btn bg-danger text-light' onClick={()=>{deletetodo(todo.id)}}>✖</button>
                    </li>
                )
            })}
        </ul>
     </div>
     </div>

     </>
  )
}
