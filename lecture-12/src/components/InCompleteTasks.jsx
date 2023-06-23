import React from 'react'
import Task from './Task'
import TasksContainer from './TasksContainer'

const InCompleteTasks = ({ inCompleteTasks, onClick }) => {
  return (
    <>
      <TasksContainer title="Incomplete Tasks" classTitle="incomplete">
        {inCompleteTasks.map(task => (
          <Task key={task.id} {...task} onClick={onClick} />
        ))}
      </TasksContainer>
    </>
    // 
  )
}

export default InCompleteTasks;