import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { taskAdded, taskDeleted } from './features/tasks/tasksSlice';
import { selectAllTasks, selectActiveTasks, selectCompletedTasks } from './features/tasks/tasksSlice';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Search from './components/Search';
import Stats from './components/Stats';

function App() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch()
  const allTasks = useSelector(selectAllTasks)
  const activeTasks = useSelector(selectActiveTasks)
  const completedTasks = useSelector(selectCompletedTasks)

  const handleAdd = (text) => {
    dispatch(taskAdded(text))
  }

  const handleClear = () => {
    completedTasks.forEach(task => dispatch(taskDeleted(task.id)))
  }

  const filteredTasks = allTasks.filter(task =>
    task.text.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <h1>Менеджер задач</h1>
      <div className="container">
        <TaskForm onAdd={handleAdd} />
        <Search value={search} onChange={setSearch} />
        <Stats
          total={allTasks.length}
          active={activeTasks.length}
          completed={completedTasks.length}
        />
        <TaskList tasks={filteredTasks} />
        {completedTasks.length > 0 && (
          <button className="clear-btn" onClick={handleClear}>
            Очистить завершённые
          </button>
        )}
      </div>
    </div>
  );
}

export default App;