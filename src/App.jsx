import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState("")

  function getVisibility() {
    if (todos.length == 0) {
      return ""
    } else {
      return "hidden"
    }
  }
  
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList}))
  }

  function addTodo(Todo) {
    const newTodos = [ ...todos, [Todo, false, false]];
    persistData(newTodos)
    setTodos(newTodos)
  }

  function toggleTodo(index) {
    const newTodos = [...todos];
    newTodos[index][1] = !newTodos[index][1];
    persistData(newTodos)
    setTodos(newTodos)
  }

  function deleteTodoAnimate(index) {
    const newTodos = [...todos];
    newTodos[index][2] = true;
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
      <TodoList deleteTodoAnimate={deleteTodoAnimate} getVisibility={getVisibility} editTodo={editTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos}/>
    </main>
  )
}

export default App
