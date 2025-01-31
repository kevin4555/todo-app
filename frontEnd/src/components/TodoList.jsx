import TaskItem from "./TaskItem";

const TodoList = ({ tasks = [], toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="space-y-3 w-full max-w-lg mx-auto">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
