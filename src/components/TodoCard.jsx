import React, { useState } from 'react'
import EditCard from './EditCard';

function TodoCard(props) {
    const {todo, toggleTodo, deleteTodoAnimate, deleteTodo, index, editTodoInplace} = props;
    let icon = "";
    let completedClass = ""
    let deleteClass = ""
    const [renderEditCard, setRenderEditCard] = useState(false);

    if (todo[1]) {
        icon = "fa-regular fa-square-check"
        completedClass = "completed"
    } else {
        icon = "fa-regular fa-square"
        completedClass = ""
    }
    
    if (todo[2]) {
        deleteClass = "animate"
    } else {
        deleteClass = ""
    }
    
    if (renderEditCard) {
        return (
            <EditCard setRenderEditCard={setRenderEditCard} editTodoInplace={editTodoInplace} todo={todo} index={index}></EditCard>
        )
    }
    return (
        <li className={deleteClass + " " + completedClass}>
            <div>
                <button onClick = {()=>{toggleTodo(index)}}>    
                    <i className={icon}></i>
                </button>
                
                <div><p className={completedClass}>{todo[0]}</p></div>
            </div>

            <button onClick = {()=>{
                setRenderEditCard(true)
            }}>    
            <i className="fa-regular fa-pen-to-square edit"></i>
            </button>

            <button onClick = {()=>{
                    deleteTodoAnimate(index)
                    setTimeout(()=>{
                        deleteTodo(index)
                    }, 400)

                }}>    
            <i className="fa-solid fa-trash delete"></i>
            </button>
        </li>
    )
}

export default TodoCard