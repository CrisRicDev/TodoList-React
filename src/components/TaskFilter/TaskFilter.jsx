
const filters = [
    { label: 'Todos', value: 'all' },
    { label: 'Completados', value: 'completed' },
    { label: 'Pendientes', value: 'pending' },
];

export default function TaskFilter({ currentFilter, onChange}) {
    return (
        <div className="flex justify-center gap-4 mt-6 mb-8">
      {filters.map(filter => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`px-4 py-2 rounded-full transition duration-200 
            ${currentFilter === filter.value 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
    )
    
};
