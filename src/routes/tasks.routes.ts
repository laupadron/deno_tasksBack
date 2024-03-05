import {Router} from 'npm:express';
import {getTasks, getOneTask, createTasks, deleteTasks, updateTasks} from '../controllers/tasksController.ts'

const router = Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getOneTask);
router.post('/tasks', createTasks);
router.delete('/tasks/:id', deleteTasks);
router.put('/tasks/:id', updateTasks);

export default router;