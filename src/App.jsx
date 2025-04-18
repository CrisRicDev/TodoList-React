import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskStats from './components/TaskStats/TaskStats';
import './index.css'

function App() {
  const initialTasks = [
    {
      id: uuidv4(),
      title: "Aprender React",
      description: "Estudiar los fundamentos de React",
      completed: false,
      createdAt: new Date()
    }
  ];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = ({ title, description }) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      createdAt: new Date()
    };
    setTasks([newTask, ...tasks]);
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-cyan-600 via-blue-400 to-indigo-500 bg-opacity-30 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white drop-shadow-lg mb-10 tracking-tight">
          🐱‍👤 <span className="text-white/90">Prepara tu vida</span>
        </h1>

        <div className="space-y-6 ">
          <TaskForm
            onAdd={handleAddTask}
            onUpdate={handleUpdateTask}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
          />

          <TaskFilter currentFilter={filter} onChange={setFilter} />

          <TaskList
            tasks={tasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
            onEdit={setEditingTask}
            filter={filter}
          />

          <TaskStats tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;