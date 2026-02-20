import React from 'react';
import type { Task, Status } from '../types';
import { TaskItem } from './TaskItem';

interface Props {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onEdit, onDelete }) => {
  const sections: Status[] = ['In Progress', 'Pending', 'Completed'];


  return (
    <div className="task-list-container">
      {sections.map(status => {
        const filtered = tasks.filter(t => t.status === status);
        return (
          <details open key={status} className="status-section">
            <summary className="status-header">
              {status} ({filtered.length})
              <span className="chevron">⌄</span>
            </summary>
            <div className="items-container">
              {filtered.length > 0 ? (
                filtered.map(task => (
                  <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
                ))
              ) : (
                <div style={{ padding: '15px', textAlign: 'center', color: '#888', fontSize: '0.85rem' }}>
                  No tasks
                </div>
              )}
            </div>
          </details>
        );
      })}
    </div>
  );
};

export default TaskList;