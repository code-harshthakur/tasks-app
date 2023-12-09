import { Router } from 'express';
const router = Router();
import { getAllTasks, addTask, updateTask, deleteTask } from '../Controllers/taskController';

router.get('/', getAllTasks);
router.post('/', addTask);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);

export default router;
