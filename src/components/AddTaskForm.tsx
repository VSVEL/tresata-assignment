import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
  const [isStatusOpen, setIsStatusOpen] = useState(false);

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
          <div className="status-accordion">
            <div
              className="status-accordion-header"
              onClick={() => setIsStatusOpen(!isStatusOpen)}
            >
              <div className="header-selection">
                <span className={`status-dot-large ${status.toLowerCase().replace(' ', '-')}`}></span>
                <span className="status-label">{status}</span>
              </div>
              {isStatusOpen ? <ChevronUp size={20} color="#0056b3" /> : <ChevronDown size={20} color="#0056b3" />}
            </div>

            {isStatusOpen && (
              <div className="status-selector-container">
                {(['Pending', 'In Progress', 'Completed'] as Status[]).map((s) => (
                  <div
                    key={s}
                    className={`status-option-item ${s === status ? 'active' : ''}`}
                    onClick={() => {
                      setStatus(s);
                      setIsStatusOpen(false);
                    }}
                  >
                    <span className={`status-dot-large ${s.toLowerCase().replace(' ', '-')}`}></span>
                    <span className="status-label">{s}</span>
                  </div>
                ))}
              </div>
            )}
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