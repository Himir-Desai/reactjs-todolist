import React from 'react'
import { useState } from "react"


export default function EditCard(props) {
    const {todo, index, editTodoInplace,setRenderEditCard} = props;
    const [todoEditValue, setTodoEditValue] = useState(todo[0])


    return (
        <li className="editCard">
            <div>
                <div><input value={todoEditValue} onChange={(e)=>{setTodoEditValue(e.target.value)}}></input></div>
            </div>

            <button onClick = {()=>{
                editTodoInplace(index, todoEditValue)
                setRenderEditCard(false)
            }}>    
            <i className="fa-solid fa-check done"></i>
            </button>
        </li>
    )
}
