import TaskItem from "./TaskItem";

const TodoList = ({ tasks = [], toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="space-y-2">
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
