import { v4 as uuidv4 } from "uuid";
let tasks = []; // In-memory storage

const generateNewId = () => {
  return uuidv4();
};

export const getTasks = (req, res) => {
  res.json(tasks);
};

export const createTask = (req, res) => {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({
      error: "La descripción es requerida",
    });
  }

  const newTask = {
    id: generateNewId(),
    description,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const completeTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }
  task.completed = true;
  res.json(task);
};

export const deleteTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }
  tasks.splice(index, 1);
  res.status(204).send();
};
