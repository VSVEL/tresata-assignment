// src/components/TaskItem.tsx
import { Pencil, Trash2 } from 'lucide-react';
import type { Task } from '../types';

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ task, onEdit, onDelete }: Props) => {
  return (
    <div className="task-item-card">
      <div className="task-item-layout">
        <div className="task-avatar">
          {task.title.charAt(0).toUpperCase()}
        </div>

        <div className="task-main-content">
          <div className="task-header-row">
            <h3 className="task-title">{task.title}</h3>
            <div className={`status-indicator ${task.status.replace(' ', '-').toLowerCase()}`}>
              <span className="status-dot"></span>
              <span className="status-text">{task.status}</span>
            </div>
          </div>

          <div className="task-desc-row">
            <p className="task-description">{task.description}</p>
          </div>

          <div className="task-footer-row">
            <span className="task-date">{task.date}</span>
            <div className="task-actions">
              <button className="edit-btn" onClick={() => onEdit(task)}>
                <Pencil size={18} />
              </button>
              <button className="delete-btn" onClick={() => onDelete(task.id)}>
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};