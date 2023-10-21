import React from 'react';
import { useState} from 'react';
import './App.css';

function App() {

  // add usestates to save input and todos
 const[input, setinput]= useState("")
 const[todos, settodos]= useState([])

  // When the component mounts, fetch todos from local storage


  // addTodo Function
  const addTodo = () =>{
    if(input){
      const newtodo =[...todos, input]
      settodos(newtodo)
      setinput("")
    }
  }
  

  // Remove Todo Function
  const removeTodo = (index) =>{
    const newtodo = [...todos]
    newtodo.splice(index,1)
    settodos(newtodo);

  }
 

  //create a UI with
  return (
    <div className="App">
      <h1>Simple To-Do List</h1>
      <div className="todoadd"> 
        <input value={input} onChange={(e)=> setinput(e.target.value)} placeholder= "add input here" ></input>
        <button onClick={addTodo}>Add</button>
      </div>
      <u1>
        {todos.map((todo,index) => (
          <li key={index}>{todo}
          
          <button onClick={()=> removeTodo(index)}/>

          </li>
        ))}
        
      </u1>

     
    </div>
  );
}

export default App;