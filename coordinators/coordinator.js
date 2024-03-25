import { v4 as uuid } from 'uuid';
import TodoModel from '../models/models.js';

export default class TodoListCoordinator {
  static getTodos = () => TodoModel.getTodos();

  static createTodo = (newTodo) => {
    const todo = {
      ...newTodo,
      id: uuid(),
    };

    return TodoModel.createTodo(todo);
  };

  static getTodo = (id) => TodoModel.getTodo(id);

  static deleteTodo = (id) => TodoModel.deleteTodo(id);

  static replaceTodo = (id, todo) => {
    const replaceTodo = {
      ...todo,
      id,
    };
    return TodoModel.replaceTodo(id, replaceTodo);
  };

  static updateTodo = (id, todo) => TodoModel.updateTodo(id, todo);
}
