import { useState, useMemo, useCallback } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import InCompleteTasks from './components/InCompleteTasks';
import CompleteTasks from "./components/CompleteTasks";
import Input from './components/Input';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");


  const addTask = () => {
    const newTask = {
      id: nanoid(),
      title: input,
      complete: false
    }
    setTasks((prevState) => [newTask, ...prevState]);
    setInput("");
  }

  const handleMoveTask = useCallback((id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, complete: !task.complete }
      }
      return task
    })
    setTasks(updatedTasks);
  }, [tasks])

  const handleRemoveTask = useCallback((id) => {
    setTasks(
      tasks.filter(task => task.id !== id)
    )
  }, [tasks])

  const inCompleteTasks = useMemo(() => {
    return tasks.filter(task => !task.complete);
  }, [tasks]);

  const completeTasks = useMemo(() => {
    return tasks.filter(task => task.complete)
  }, [tasks]);


  return (
    <div className="app">
      <Input input={input} setInput={setInput} onClick={addTask} />
      <InCompleteTasks inCompleteTasks={inCompleteTasks} onClick={handleMoveTask} />
      <CompleteTasks completeTasks={completeTasks} onRemove={handleRemoveTask} onMove={handleMoveTask} />
    </div>
  );
}

export default App;
