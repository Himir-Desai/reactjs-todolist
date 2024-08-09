import React from 'react'

export default function TodoInput(props) {
    const {addTodo, todoValue, setTodoValue} = props;
    
    return (
        <header>
            <input value={todoValue} onChange={(e)=>{setTodoValue(e.target.value)}} placeholder='Enter Todo...'/>
            <button onClick={()=>{
                if (todoValue != "") {
                    addTodo(todoValue)
                    setTodoValue("")
                }
            }}>Add</button>
        </header>
  )
}
