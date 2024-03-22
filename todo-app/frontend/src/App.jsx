import { useState } from 'react'

import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then((res) => {
    // console.log(res)
    res.json()
    .then((json) => {
      setTodos(json);
      console.log(JSON.stringify(json));
    })
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
