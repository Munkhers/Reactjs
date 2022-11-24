import React from 'react'
import TodoListItem from './TodoListItem';

const todoList = [
    {num: 1, title: 'learn React.js', description: 'need to learn React from youtube videos'},
    {num: 2, title: 'read book', description: 'was on page 76'},
    {num: 3, title: 'wash dishes', description: 'using dishwasher'},
];

const ToDoList = (props) => {

    return (
        <div>
            <ul className='todo-container'> 
                {
                    todoList.map((item, index) => {
                        return <TodoListItem todoItem={item} key={index}/>
                    })
                }
            </ul>
        </div>
        
    )
}
export default ToDoList