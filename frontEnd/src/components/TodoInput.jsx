import { useState } from "react";

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-6">
      <input
        type="text"
        placeholder="What do you need to do?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-orange-600 transition-all"
      >
        ADD
      </button>
    </form>
  );
};

export default TodoInput;
