import React, { memo } from 'react'
import Task from './Task';
import TasksContainer from './TasksContainer';

const CompleteTasks = ({ completeTasks, onRemove, onMove }) => {

    return (
        <>
            <TasksContainer title="Complete Tasks" classTitle="complete">
                {completeTasks.map(task => <Task key={task.id} {...task} onRemove={onRemove} onMove={onMove} />)}
            </TasksContainer>
        </>
    )
}

export default memo(CompleteTasks);