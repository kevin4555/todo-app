import { FaCheckCircle, FaRegCircle, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-200 transition-all max-w-full overflow-hidden">
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? (
          <FaCheckCircle className="text-orange-500 text-xl" />
        ) : (
          <FaRegCircle className="text-gray-400 text-xl hover:text-gray-600 transition-all" />
        )}
      </button>
      <span
        className={`text-lg truncate min-w-0 flex-1 px-2 ${
          task.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {task.description}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700 transition-all"
      >
        <FaTrash />
      </button>
    </li>
  );
};

export default TaskItem;
