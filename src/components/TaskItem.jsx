import React from 'react';
import { useDispatch } from 'react-redux';
import { taskToggled } from '../features/tasks/tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <div className={`task-item ${task.completed ? 'done' : ''}`}>
      <div className="info">
        <div className="date">{task.date}</div>
        <div className="text">{task.text}</div>
      </div>
      <button
        className="toggle-btn"
        onClick={() => dispatch(taskToggled(task.id))}
      >
        {task.completed ? 'Вернуть' : 'Завершить'}
      </button>
    </div>
  );
};

export default TaskItem;