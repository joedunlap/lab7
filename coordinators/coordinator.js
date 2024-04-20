import { v4 as uuid } from 'uuid';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import TodoModel from '../models/models.js';
import todoSchema from '../schemas/todo.json';

const ajv = new Ajv();
addFormats(ajv);
const validate = ajv.compile(todoSchema);

export default class TodoListCoordinator {
  static getTodos = () => TodoModel.getTodos();

  static createTodo = (newTodo) => {
    const todo = {
      ...newTodo,
      id: uuid(),
    };

    const valid = validate(todo);
    if (!valid) {
      throw validate.errors;
    }

    return TodoModel.createTodo(todo);
  };

  static getTodo = (id) => TodoModel.getTodo(id);

  static deleteTodo = (id) => TodoModel.deleteTodo(id);

  static replaceTodo = (id, todo) => {
    const replaceTodo = {
      ...todo,
      id,
    };

    const valid = validate(todo);
    if (!valid) {
      throw validate.errors;
    }
    return TodoModel.replaceTodo(id, replaceTodo);
  };

  static updateTodo = (id, todo) => {
    const valid = validate(todo);
    if (!valid) {
      throw validate.errors;
    }
    TodoModel.updateTodo(id, todo);
  };
}
