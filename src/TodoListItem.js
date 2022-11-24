import React from 'react'

const ToDoListItem = (props) => {
    return (
        <>
            <li className='list-item'>{props.todoItem.num}. {props.todoItem.title} ({props.todoItem.description})</li>
        </>
    )
}
export default ToDoListItem