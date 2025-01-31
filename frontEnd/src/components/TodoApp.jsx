import { useState, useEffect } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Footer from "./Footer";
import axiosInstance from "../api/axios.js";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/tasks");
        setTasks(response.data);
      } catch (err) {
        console.error("Error al cargar tareas:", err);
        setError("No se pudieron cargar las tareas.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (description) => {
    setError(null);
    try {
      const newTask = { description, completed: false };
      const response = await axiosInstance.post("/tasks", newTask);
      setTasks([...tasks, response.data]);
    } catch (err) {
      console.error("Error al agregar tarea:", err);
      setError("No se pudo agregar la tarea.");
    }
  };

  const toggleTaskCompletion = async (id) => {
    setError(null);
    try {
      const updatedTask = tasks.find((task) => task.id === id);
      if (!updatedTask) return;

      const response = await axiosInstance.patch(
        `/tasks/${updatedTask.id}/complete`
      );

      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
    } catch (err) {
      console.error("Error al actualizar tarea:", err);
      setError("No se pudo actualizar la tarea.");
    }
  };

  const deleteTask = async (id) => {
    setError(null);
    try {
      await axiosInstance.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error("Error al eliminar tarea:", err);
      setError("No se pudo eliminar la tarea.");
    }
  };

  /* const clearCompleted = async () => {
    try {
      await axiosInstance.delete("/tasks/completed");
      setTasks(tasks.filter((task) => !task.completed));
    } catch (err) {
      console.error("Error al limpiar tareas completadas:", err);
      setError("No se pudo limpiar las tareas completadas.");
    }
  }; */

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white rounded-xl shadow-lg p-6">
        <Header />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <TodoInput addTask={addTask} />
        {loading ? (
          <p className="text-center text-gray-500">Cargando tareas...</p>
        ) : (
          <TodoList
            tasks={tasks}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        )}
        {/* <Footer clearCompleted={clearCompleted} /> */}
      </div>
    </div>
  );
};

export default TodoApp;
