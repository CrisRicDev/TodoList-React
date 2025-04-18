import { useState, useEffect } from 'react';

export default function TaskForm({ onAdd, onUpdate, editingTask, setEditingTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("El título es obligatorio");

    const taskData = {
      ...editingTask,
      title,
      description
    };

    editingTask ? onUpdate(taskData) : onAdd(taskData);
    setTitle('');
    setDescription('');
    setEditingTask(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-red-100 p-4 rounded-xl shadow-lg max-w-xl mx-auto mb-6 transition-all duration-300"
    >
      <h2 className="text-xl font-bold mb-4 text-blue-700">
        {editingTask ? 'Editar tarea' : 'Nueva tarea'}
      </h2>

      <input
        type="text"
        placeholder="Título de la tarea"
        title="El título debe tener al menos 3 caracteres alfanuméricos"
        className="w-full mb-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
        required
        pattern="^[A-Za-z0-9ÁÉÍÓÚáéíóúñÑ ]{5,20}$"
      />

      <textarea
        placeholder="Descripción de la tarea"
        title="La descripción debe tener al menos 5 caracteres"
        className="w-full mb-2 p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        pattern="^[A-Za-z0-9ÁÉÍÓÚáéíóúñÑ ].{5,100}"
        rows={3}
      />

      <div className="flex justify-end gap-3">
        {editingTask && (
          <button
            type="button"
            onClick={() => setEditingTask(null)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded transition"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          {editingTask ? 'Actualizar' : 'Agregar'}
        </button>
      </div>
    </form>
  );
}
