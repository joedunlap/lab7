import { v4 as uuid } from 'uuid';
import TodoModel from '../models/models.js';

export default class TodoListCoordinator {
  static todoList = () => {
    console.log('\t Coordinator : todoList()');
    return TodoModel.todoList();
  };

  static createTodo = (newTodo) => {
    console.log('\t Coordinator : createTodo()');

    const todo = {
      ...newTodo,
      id: uuid(),
    };

    return TodoModel.createWidget(todo);
  };

  static getTodo = (id) => {
    console.log('\t Coordinator : getTodo()');
    return TodoModel.getWidget(id);
  };

  static deleteTodo = (id) => {
    console.log('\t Coordinator : deleteTodo()');
    return TodoModel.deleteTodo(id);
  };

  static replaceTodo = (id, todo) => {
    console.log('\t Coordinator : replaceTodo()');
    const replaceTodo = {
      ...todo,
      id,
    };
    return TodoModel.replaceWidget(id, replaceTodo);
  };

  static updateTodo = (id, todo) => {
    console.log('\t Coordinator : replaceTodo()');
    return TodoModel.updateWidget(id, todo);
  };
}
