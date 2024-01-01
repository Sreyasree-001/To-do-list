import React, { useState } from 'react'
import { useEffect } from 'react'

const TodoInput = ({ setWorkInput, setViewList }) => {

    const [input, setInput] = useState("")

    const valueHandler = (value) => {
        setInput(value)

    }

    const handler = () => {
        if (input != "") {
            setWorkInput((lastInput) => {
                return [...lastInput, input]
            })
            setViewList(true)
        }

        setInput("")
    }

    return (
        <>
            <div className='enter-input'>
                <input type='text'
                    placeholder='enter your to-do here'
                    value={input}
                    onChange={(e) => { valueHandler(e.target.value) }}
                ></input>
                <button onClick={handler} type='submit' id='btn'
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        height="23px"
                        viewBox="0 0 448 512">
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 
                        32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 
                        14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 
                        32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default TodoInput
