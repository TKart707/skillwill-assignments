import React from 'react'

const Task = ({ id, title, onClick, complete, onRemove, onMove }) => {

  return (
    <div className='task-container'>
      <p>{title}</p>

      {/* Buttons Container */}
      <div className='btn-container'>
        {complete ? (
          <>
            <button className='btn remove' onClick={() => onRemove(id)}>remove</button>
            <button className='btn' onClick={() => onMove(id)}>move incompete</button>
          </>
        ) : <button onClick={() => onClick(id)} className='btn'>complete</button>}
      </div>

    </div>
  )
}

export default Task