import express from "express";
import {
  getTasks,
  createTask,
  completeTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id/complete", completeTask);
router.delete("/:id", deleteTask);

export default router;
