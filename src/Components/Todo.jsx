import React, { useState } from 'react'
import './Todo.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'



const Todo = () => {

    const [workInput, setWorkInput] = useState([]);
    const [viewList, setViewList] = useState(false);
    
    const removeAll = () => {
        setWorkInput([])
        setViewList(false)
    }

    const deleteItem = (id) => {
        setWorkInput((lastInput) => {
            return lastInput.filter((arr, index) => {
                return index != id;
            }
            )
        })
    }

    return (
        <div className='main-container'>
        <h1>To-do List🖊️</h1>
            <TodoInput setWorkInput={setWorkInput} setViewList={setViewList} />
            <div className='sub-container'
            >
                {
                    viewList && workInput.length!=0?
                        workInput.map((items, index) => {
                            return <TodoList work={items}
                                key={index} id={index}
                                setDelete={deleteItem} />
                        })
                        :
                        <p className='no-content'>No content</p>
                }
            </div>
            <button className='delete-all'
            onClick={removeAll}
            >Delete all</button>
        </div>
    )
}

export default Todo
