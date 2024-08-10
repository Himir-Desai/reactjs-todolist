import React, { useState } from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos, toggleTodo, deleteTodo, deleteTodoAnimate, getVisibility, editTodoInplace} = props;

    return (
        <ul>
            <div className={getVisibility()} id="NoTodos">
                <p id="NoTodosP1">No Todos to show</p>
                <p id="NoTodosP2" >Do something dude</p>
            </div>
            {todos.length == 0}
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard deleteTodoAnimate={deleteTodoAnimate} editTodoInplace={editTodoInplace} deleteTodo={deleteTodo} index={todoIndex} toggleTodo={toggleTodo} todo={todo} key={todoIndex}></TodoCard>
                )
            })}
        </ul>
    )
}
