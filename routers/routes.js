import express from 'express';
import {
  getTodos,
  createTodo,
  getTodo,
  replaceTodo,
  deleteTodo,
  updateTodo,
} from '../controllers/controller.js';

const TodosRouter = express.Router();

// GET /api/v1/todos
TodosRouter.get('/', getTodos);

// POST /api/v1/todos
TodosRouter.post('/', createTodo);

// GET /api/v1/todos/<id>
TodosRouter.get('/:id', getTodo);

// PUT /api/v1/todos/<id>
TodosRouter.put('/:id', replaceTodo);

// DELETE /api/v1/todos/<id>
TodosRouter.delete('/:id', deleteTodo);

// PATCH /api/v1/todos
TodosRouter.patch('/:id', updateTodo);

export default TodosRouter;
