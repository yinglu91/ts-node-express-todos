import { Router } from 'express';
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} from '../controllers/todos';

const router = Router();

// method: post, http://localhost:5000/todos/
router.post('/', createTodo);

// method: get, http://localhost:5000/todos/
router.get('/', getTodos);

// method: patch, http://localhost:5000/todos/123
router.patch('/:id', updateTodo);

// method: delete, http://localhost:5000/todos/123
router.delete('/:id', deleteTodo);

export default router;
