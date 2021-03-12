import { Router } from 'express';
import {
	getTodos,
	addTodo,
	updateTodo,
	deleteTodo,
} from '../controllers/todos/index';
import { auth } from '../middlewares/auth.middleware';

const router: Router = Router();

router.get('/todos', auth, getTodos);

router.post('/add-todo', auth, addTodo);

router.put('/edit-todo/:id', updateTodo);

router.delete('/delete-todo/:id', deleteTodo);

export default router;
