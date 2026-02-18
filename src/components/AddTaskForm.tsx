import React, { useState } from 'react';
import type { Task, Status } from '../types';

interface Props {
  title: string;
  initialTask?: Task;
  onSubmit: (title: string, desc: string, status: Status) => void;
  onCancel: () => void;
}

const TaskForm: React.FC<Props> = ({ title, initialTask, onSubmit, onCancel }) => {
  const [taskTitle, setTaskTitle] = useState(initialTask?.title || '');
  const [desc, setDesc] = useState(initialTask?.description || '');
  const [status, setStatus] = useState<Status>(initialTask?.status || 'Pending');

  return (
    <div className="form-view">
      <header className="form-header">
        <button className="back-btn" onClick={onCancel}>←</button>
        <h2>{title}</h2>
      </header>
      
      <div className="form-body">
        <input 
          className="input-field"
          value={taskTitle} 
          onChange={(e) => setTaskTitle(e.target.value)} 
          placeholder="Enter the title" 
        />
        <textarea 
          className="input-field area"
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
          placeholder="Enter the description"
        />

        {initialTask && (
          <div className="status-dropdown">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value as Status)}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        )}

        <div className="form-actions">
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-submit" onClick={() => onSubmit(taskTitle, desc, status)}>
            {initialTask ? 'Update' : 'ADD'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;