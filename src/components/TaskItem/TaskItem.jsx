export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
    return (
        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md px-5 py-4 flex justify-between items-start gap-4 transition hover:shadow-lg">
          <div className="flex items-start gap-4 w-full">
            <label className="inline-flex items-start cursor-pointer mt-1">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="peer hidden"
              />
              <div className="h-5 w-5 rounded-full border-2 border-indigo-500 flex items-center justify-center transition-all duration-200 peer-checked:bg-indigo-500">
                <svg
                  className="w-3 h-3 text-white hidden peer-checked:block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </label>
      
            <div className="w-full">
              <h3 className={`text-lg font-semibold transition-all duration-200 ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {task.title}
              </h3>
              <p className={`text-sm transition-all duration-200 ${task.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                {task.description}
              </p>
            </div>
          </div>
      
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(task)}
              className=" hover:bg-amber-300 hover:text-indigo-800 px-2 py-1 rounded transition"
              title="Editar"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="hover:bg-red-300 hover:text-red-800 px-2 py-1 rounded transition"
              title="Eliminar"
            >
              🗑️
            </button>
          </div>
        </div>
      );
      
};
