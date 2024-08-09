import React from 'react'

export default function TodoCard(props) {
    const {todo, toggleTodo, deleteTodo, index, editTodo} = props;
    let icon = "";
    let completedClass = ""

    if (todo[1]) {
        icon = "fa-regular fa-square-check"
        completedClass = "completed"
    } else {
        icon = "fa-regular fa-square"
        completedClass = ""
    }
    
    return (
        <li className={completedClass}>
            <div>
                <button onClick = {()=>{toggleTodo(index)}}>    
                    <i className={icon}></i>
                </button>
                <p className={completedClass}>{todo[0]}</p>
            </div>

            <button onClick = {()=>{
                editTodo(index)
            }}>    
            <i className="fa-regular fa-pen-to-square edit"></i>
            </button>

            <button onClick = {()=>{deleteTodo(index)}}>    
            <i className="fa-solid fa-trash delete"></i>
            </button>
            
        </li>
    )
}
