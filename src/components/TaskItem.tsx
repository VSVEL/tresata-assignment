// src/components/TaskItem.tsx
import { Pencil, Trash2, Circle } from 'lucide-react';
import type { Task } from '../types';

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ task, onEdit, onDelete }: Props) => {
  return (
    <div className="task-item-group">
      <div className="task-item">
        <div className="task-icon"><Circle size={20} color="#0056b3" /></div>
        <div className="task-content">
          <div className="task-header">
            <h3>{task.title}</h3>
            <span className={`status-pill ${task.status.replace(' ', '-').toLowerCase()}`}>
               • {task.status}
            </span>
          </div>
          <p>{task.description}</p>
          <span className="task-date">{task.date}</span>
        </div>
        <div className="task-actions">
          <button onClick={() => onEdit(task)}><Pencil size={16} /></button>
          <button onClick={() => onDelete(task.id)} className="delete"><Trash2 size={16} /></button>
        </div>
      </div>
    </div>
  );
};