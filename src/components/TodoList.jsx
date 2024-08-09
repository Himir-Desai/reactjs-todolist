import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos, toggleTodo, deleteTodo, editTodo} = props;

    return (
        <ul>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard editTodo={editTodo} deleteTodo={deleteTodo} index={todoIndex} toggleTodo={toggleTodo} todo={todo} key={todoIndex}></TodoCard>
                )
            })}
        </ul>
    )
}
