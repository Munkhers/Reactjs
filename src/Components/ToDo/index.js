import React, { useState } from 'react'
import './style.css'
import { AiOutlineSend } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'


const ToDo = () => {

    const [input, setInput] = useState(
        {
            title: '',
            createdDate: '',
            isCompleted: false,
            isUpdated: false,
            idx: null,
        }
    )
    // const [list, setList] = useState({
    //     original: [],
    //     filtered: [],
    // })
    const [list, setList] = useState([]);
    const [searchField, setSearchField] = useState('')

    // const completed = (index) => {
    //     let tempList = [...list];
    //     tempList.forEach((item, idx) => {
    //         if (idx === index) {
    //             tempList[idx].isCompleted = !tempList[idx].isCompleted;
    //         }
    //     })
    //     setList([...tempList]);
    // }
    const completed = (idx) => {
        setList((currState) => {
            return currState.map((currTodo, currTodoIdx) => {
                // return currTodoIdx === idx ? { ...currTodo, isCompleted: !currTodo.isCompleted} : currTodo
                if (currTodoIdx === idx) {
                    return { ...currTodo, isCompleted: !currTodo.isCompleted }
                } else {
                    return currTodo
                }

            })
        })
    }

    const removeList = (itemIndex) => {
        setList((currState) => (currState.filter((item, idx) => idx !== itemIndex)))
    }

    const editList = (listIndex) => {
        setInput({
            title: list[listIndex].title,
            createdDate: list[listIndex].createdDate,
            isCompleted: list[listIndex].isCompleted,
            isUpdated: true,
            idx: listIndex,

        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        if (input.title.length > 0) {
            if (input.isUpdated) {
                // let tempList = list.map((element, index) => {
                //     if (index === input.index) {
                //         return {
                //             ...element,
                //             title: input.title,
                //             isUpdated: false,
                //         }
                //     }
                //     else {
                //         return element
                //     }
                // })
                setList(currState => {
                    return currState.map((element, index) => {
                        if (index === input.idx) {
                            return {
                                ...element,
                                title: input.title,
                                isUpdated: false,
                            }
                        }
                        else {
                            return element
                        }
                    })
                });
            } else {
                let currentDate = new Date();
                let date = `${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDay()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
                setList([...list, { title: input.title, createdDate: date, isCompleted: false, isUpdated: true }]);
            }
        } else {
            alert('Write something')
        }
        setInput({ title: '', createdDate: '', isCompleted: true, isUpdated: false, idx: null })
    }

    const onSearch = () => {
        setList(list.filter((e) => { e.title.toLowerCase().includes(searchField.toLowerCase()) }))
    }
    const saveLocalStorage = () => {
        localStorage.setItem('my-to-do-list', JSON.stringify(list))
    }
    const readLocalStorage = () => {
        let localStorageData = localStorage.getItem('my-to-do-list')
        localStorageData = JSON.parse(localStorageData)
        setList(localStorageData)
    }
    return (
        <div >
            <form onSubmit={onFormSubmit}>
                <div className='todo-search'>
                    <input
                        type='search'
                        placeholder='Search to-do'
                        onChange={(e) => setSearchField(e.target.value)}
                    />
                    <button
                        className='todo-search-button'
                        type='button'
                        onClick={() => { onSearch() }}
                    ><AiOutlineSearch /></button>
                </div>
                <div className='todo-input'>
                    <input
                        type='text'
                        value={input.title}
                        placeholder='Enter To-Do '
                        onChange={(e) => setInput({ ...input, title: e.target.value })}
                    />
                    <button
                        className='todo-submit'
                        type='submit'
                    ><AiOutlineSend /></button>

                </div>
            </form>
            <div className='todo-local'>
                <button
                    className='todo-saveLocal'
                    onClick={saveLocalStorage}
                >saveLocalStorage</button>
                <button
                    className='todo-readLocal'
                    onClick={readLocalStorage}
                >readLocalStorage</button>
            </div>
            <div className='todo-lists'>
                <h2>To Do List:</h2>
                {list.map((item, idx) =>
                    <div key={idx} className={item.isCompleted ? 'completed' : 'uncompleted'}>
                        <div className='list-item'>
                            <div className='list-description'>{item.title}</div>
                            <div className='list-date'>Added: ({item.createdDate})</div>
                        </div>
                        <div>
                            <button onClick={() => { completed(idx) }}><BsFillCheckCircleFill /></button>
                            <button onClick={() => { editList(idx) }}><MdEdit /></button>
                            <button onClick={() => { removeList(idx) }}><MdDelete /></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ToDo