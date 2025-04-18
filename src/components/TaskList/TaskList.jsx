import TaskItem from '../TaskItem/TaskItem';

export default function TaskList({ tasks, onToggle, onDelete, onEdit, filter }) {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center mt-8">No hay tareas para mostrar.</div>
    );
  }

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
