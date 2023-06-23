import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import InCompleteTasks from './components/InCompleteTasks';
import CompleteTasks from "./components/CompleteTasks";
import Input from './components/Input';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");


  const addTask = () => {
    setTasks([...tasks, {
      id: nanoid(),
      title: input,
      complete: false
    }])
    setInput("");
  }

  const handleMoveTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, complete: !task.complete }
      }
      return task
    })
    setTasks(updatedTasks);
  }

  const handleRemoveTask = (id) => {
    setTasks(
      tasks.filter(task => task.id !== id)
    )
  }

  const inCompleteTasks = tasks.filter(task => !task.complete);
  const completeTasks = tasks.filter(task => task.complete);


  return (
    <div className="app">
      <Input input={input} setInput={setInput} onClick={addTask} />
      <InCompleteTasks inCompleteTasks={inCompleteTasks} onClick={handleMoveTask} />
      <CompleteTasks completeTasks={completeTasks} onRemove={handleRemoveTask} onMove={handleMoveTask} />
    </div>
  );
}

export default App;
