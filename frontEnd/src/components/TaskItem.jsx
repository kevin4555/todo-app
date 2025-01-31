const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg shadow-sm mb-2">
      <div className="flex items-center">
        <button
          onClick={() => toggleComplete(task.id)}
          className={`mr-3 ${
            task.completed ? "text-orange-500" : "text-gray-400"
          }`}
        >
          {task.completed ? "✓" : "○"}
        </button>
        <span
          className={`${task.completed ? "line-through text-gray-400" : ""}`}
        >
          {task.description}
        </span>
      </div>
      <button onClick={() => deleteTask(task.id)} className="text-red-500">
        🗑
      </button>
    </li>
  );
};

export default TaskItem;
