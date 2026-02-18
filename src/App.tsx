import React, { useState, useMemo } from 'react';
import { useTasks } from './hooks/useTodos';
import type { Task } from './types';
import TaskList from './components/TaskList';
import TaskForm from './components/AddTaskForm';
import './App.css';

type View = 'LIST' | 'ADD' | 'EDIT';

const App: React.FC = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const [currentView, setCurrentView] = useState<View>('LIST');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [searchTerm, setSearchTerm] = useState('');


  const filteredTasks = useMemo(() => {
    return tasks.filter(task => 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tasks, searchTerm]);

  // Navigation Handlers
  const openAddView = () => setCurrentView('ADD');
  const openEditView = (task: Task) => {
    setEditingTask(task);
    setCurrentView('EDIT');
  };
  const goBack = () => {
    setCurrentView('LIST');
    setEditingTask(null);
  };

  return (
    <div className="app-container">
      {currentView === 'LIST' && (
        <>
          <header className="main-header">
            <h1>TO-DO APP</h1>
          </header>
          <div className="search-bar">
             <input type="text" placeholder="Search To-Do" />
          </div>
          <TaskList 
            tasks={filteredTasks} 
            onEdit={openEditView} 
            onDelete={deleteTask} 
          />
          <button className="fab" onClick={openAddView}>+</button>
        </>
      )}

      {currentView === 'ADD' && (
        <TaskForm 
          title="Add Task" 
          onSubmit={(t, d) => { addTask(t, d); goBack(); }} 
          onCancel={goBack} 
        />
      )}

      {currentView === 'EDIT' && editingTask && (
        <TaskForm 
          title="Edit Task" 
          initialTask={editingTask}
          onSubmit={(t, d, s) => { 
            updateTask(editingTask.id, { title: t, description: d, status: s }); 
            goBack(); 
          }} 
          onCancel={goBack} 
        />
      )}
    </div>
  );
};

export default App;