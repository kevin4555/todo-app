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
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        placeholder="What do you need to do?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow border rounded-l-lg px-4 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
      >
        ADD
      </button>
    </form>
  );
};

export default TodoInput;
