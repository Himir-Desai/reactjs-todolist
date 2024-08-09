import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    ["Do React", false],
    ["Do Competitive Programming", false],
    ["Play Minecraft", false]
  ])
  const [todoValue, setTodoValue] = useState("")
  
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList}))
  }

  function addTodo(Todo) {
    const newTodos = [[Todo, false]].concat(todos);
    persistData(newTodos)
    setTodos(newTodos)
  }

  function toggleTodo(index) {
    const newTodos = [...todos];
    newTodos[index][1] = !newTodos[index][1];
    persistData(newTodos)
    setTodos(newTodos)
  }

  function deleteTodo(index) {
    const newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (i != index) {
        newTodos.push(todos[i])
      }
    }
    persistData(newTodos)
    setTodos(newTodos)
  }

  function editTodo(index) {
    setTodoValue(todos[index][0])
    deleteTodo(index)
    persistData(newTodos)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {return}

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <main>
      <TodoInput setTodoValue={setTodoValue} todoValue={todoValue} addTodo={addTodo} />
      <TodoList editTodo={editTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos}/>
    </main>
  )
}

export default App
