import React from 'react'

const TasksContainer = ({ children, title, classTitle }) => {

    return (
        <div className={`${classTitle} tasks-container`}>
            <h3 className='title'>{title}</h3>
            {children}
        </div>
    )
}

export default TasksContainer