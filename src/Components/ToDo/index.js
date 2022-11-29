import React, { useState, useEffect } from 'react'
import './style.css'
import { AiOutlineSend } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'
import { BsFillCheckCircleFill } from 'react-icons/bs'

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
    const [list, setList] = useState(localStorage.getItem('my-to-do-list')
        ? JSON.parse(localStorage.getItem('my-to-do-list'))
        : [],);
    const [filteredList, setFilteredList] = useState(localStorage.getItem('my-to-do-list')
        ? JSON.parse(localStorage.getItem('my-to-do-list'))
        : [],);

    const [filter, setFilter] = useState('all');
    const [searchValue, setSearchValue] = useState('');

    const completed = (idx) => {
        setList((currState) => {
            return currState.map((currTodo, currTodoIdx) => {
                if (currTodoIdx === idx) {
                    return { ...currTodo, isCompleted: !currTodo.isCompleted }
                } else {
                    return currTodo
                }

            })
        })
        setFilteredList((currState) => {
            return currState.map((currTodo, currTodoIdx) => {
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
        setFilteredList((currState) => (currState.filter((item, idx) => idx !== itemIndex)))
    }
    const editList = (listIndex) => {
        // setInput((currState) => {
        // })
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
                setFilteredList(currState => {
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
                setList([...list, {
                    title: input.title,
                    createdDate: new Date().toUTCString(),
                    isCompleted: false,
                    isUpdated: true
                }]);
                setFilteredList([...list, {
                    title: input.title,
                    createdDate: new Date().toUTCString(),
                    isCompleted: false,
                    isUpdated: true
                }]);
            }
        } else {
            alert('Write something')
        }
        setInput({ title: '', createdDate: '', isCompleted: true, isUpdated: false, idx: null })
    }
    const onSearch = (value) => {
        setSearchValue(value);
        setFilteredList(
            list.filter((item) => {
                return item.title.toLowerCase().includes(value.toLowerCase());
            })
        )
    }
    useEffect(() => {
        localStorage.setItem(
            'my-to-do-list',
            JSON.stringify(list),
        )
    }, [list])

    useEffect(() => {
        if(filter === 'completed') {
            setFilteredList(
                list.filter((item) => {
                    return item.title.toLowerCase().includes(searchValue.toLowerCase()) && item.isCompleted === true;
                })
            )
        } else if (filter === 'uncompleted') {
            setFilteredList(
                list.filter((item) => {
                    return item.title.toLowerCase().includes(searchValue.toLowerCase()) && item.isCompleted === false;
                })
            )
        } else {
            setFilteredList(
                list.filter((item) => {
                    return item.title.toLowerCase().includes(searchValue.toLowerCase());
                })
            )
        }
    }, [filter, list, searchValue])
    
    return (
        <div className='to-do-body'>
            <form onSubmit={onFormSubmit}>
                <div className='todo-search'>
                    <input
                        className='todo-search-field'
                        type='search'
                        placeholder='Search to-do'
                        onChange={(e) => onSearch(e.target.value)}
                    />
                    <button className='all-button' type='button' onClick={() => {setFilter('all')}}>All</button>
                    <button className='completed-button' type='button' onClick={() => {setFilter('completed')}}>Completed</button>
                    <button className='uncompleted-button' type='button' onClick={() => {setFilter('uncompleted')}}>Uncompleted</button>
                </div>
                <div className='todo-input'>
                    <input
                        className='todo-input-field'
                        type='text'
                        value={input.title}
                        placeholder='Enter to-do '
                        onChange={(e) => setInput({ ...input, title: e.target.value })}
                    />
                    <button
                        className='todo-submit'
                        type='submit'
                    ><AiOutlineSend /></button>
                </div>
            </form>
            <div className='todo-lists'>
                <h2>To Do List:</h2>
                {filteredList.map((item, idx) =>
                    <div key={idx} className={item.isCompleted ? 'completed' : 'uncompleted'}>
                        <div className='list-item'>
                            <div className='list-description'>{item.title}</div>
                            <div className='list-date'>Added: ({item.createdDate})</div>
                        </div>
                        <div>
                            <button className='done-button' onClick={() => { completed(idx) }}><BsFillCheckCircleFill /></button>
                            <button className='edit-button' onClick={() => { editList(idx) }}><MdEdit /></button>
                            <button className='remove-button' onClick={() => { removeList(idx) }}><MdDelete /></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ToDo