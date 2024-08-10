import React from 'react'

function TodoCard(props) {
    const {todo, toggleTodo, deleteTodoAnimate, deleteTodo, index, editTodo} = props;
    let icon = "";
    let completedClass = ""
    let deleteClass = ""

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
    
    return (
        <li className={deleteClass}>
            <div>
                <button onClick = {()=>{toggleTodo(index)}}>    
                    <i className={icon}></i>
                </button>
                
                <div><p className={completedClass}>{todo[0]}</p></div>
            </div>

            <button onClick = {()=>{
                editTodo(index)
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