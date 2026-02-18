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

  if (tasks.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>
        No tasks found matching your search.
      </div>
    );
  }

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
              {filtered.map(task => (
                <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
              ))}
            </div>
          </details>
        );
      })}
    </div>
  );
};

export default TaskList;