import React from 'react';
// import App from '../App';
// import deleteTask from "../App"


const List = (props) => {
  let listItems = props.taskList.map((item) =>(
    <li key = {item.sno} className='listItem'>
      <div className='taskDetails'> {item.name} : <span className='description'>{item.discription}</span></div>
      <button className='deleteButton' onClick={()=>{props.deleteTask(item.sno)}}>Delete</button>
    </li>
    
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default List