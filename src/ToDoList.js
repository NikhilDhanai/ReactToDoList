import React from 'react';
import './todo.css';

const ToDoList = (props) => {
  return (
   <div className='listdiv'>
    <i class="fa fa-times" aria-hidden="true" onClick={()=>props.onSelect(props.id)}></i>
    <li>{props.item}</li>
    </div> 
  )
}

export default ToDoList;