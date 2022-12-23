import React, {useState} from 'react';
import ToDoList from './ToDoList';
import './App.css';


function App() {

  const [title,setTitle]= useState('');
  const [items,setItems]= useState([]);
  const setList =(event)=>{
    setTitle(event.target.value);
  }

  const setArr=()=>{
    setItems((arr)=>{
      return[...arr,title]});
      setTitle('');
      console.log(items);
  }
  const deleteItem=(id)=>{
    console.log("delete",id);
    setItems((arr)=>{
        return arr.filter((ar,index)=>{
            return index !== id;
        })
    })
  }

  return (
    <div className='Todo_box'>
    <div>
      <h1 className='Todo_box_Header'>ToDoList</h1>
    <div className='Todo_box_input'>
          <input placeholder="ENTER HERE" value={title} onChange={setList}></input>
          <button type="button" onClick={setArr}>ADD</button>
    </div>
    <div>
      <ul className='Todo_box_list'>
      {items.map((item,index)=>{
        return <ToDoList item={item} key={index} id={index} onSelect={()=>deleteItem(index)}/>   
      })}</ul></div>
    </div>
    </div>
  );
}

export default App;
