import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadTodo></LoadTodo>
    </div>
  );
}

function LoadTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])


  return (
    <div>
      <h1>Number of ToDo: {todos.length}</h1>
      <div>
        {
          todos.map(todo => <ToDo title={todo.title} userid={todo.userId} id={todo.id} completed={todo.completed} ></ToDo>)
        }
      </div>
    </div>
  )
}


function ToDo(props) {
  //console.log(props);
  return (
    <div>
      <h2>Todo Title: {props.title}</h2>
      <p>User Id: {props.userid}</p>
      <p>Id: {props.id}</p>
      <p>Status: {props.completed}</p>

    </div>
  )
}

export default App;


// ১১. json placeholder এর ওয়েবসাইট এ গিয়ে todo এর ডাটা লোড করে। সেগুলাকে দেখাতে পারো কিনা দেখো। 