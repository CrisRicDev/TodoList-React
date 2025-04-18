export default function TaskStats({ tasks }) {
    const pendingCount = tasks.filter(task => !task.completed).length;

    return (
      <div className="mt-8 flex justify-center">
        <div className="bg-gray-300 shadow-md border border-gray-500 rounded-xl px-6 py-4 text-center w-full max-w-md">
          <p className="text-lg font-semibold text-gray-700 flex items-center justify-center gap-2">
            📝<span>Tienes{' '}
                <span className="text-indigo-600 font-bold">
                  {pendingCount}
                </span>
                {' '}tarea{pendingCount !== 1 ? 's' : ''} pendiente{pendingCount !== 1 ? 's' : ''}.
              </span>
          </p>
        </div>
      </div>
    );
    
    
};
