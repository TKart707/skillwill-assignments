import React from 'react'

const Input = ({ input, setInput, onClick }) => {

    return (
        <div className='input'>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Add Tasks...'
            />
            <button onClick={onClick} className='btn'>Add Task</button>
        </div>
    )
}

export default Input;