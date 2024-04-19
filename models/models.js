import { db } from '../lib/database.js';
import Constants from '../lib/constants.js';


let todoList = [
  {
    description: 'Laundry',
    createdAt: new Date('2024-03-15').toISOString(),
    color: 'blue',
    hexColor: '#0000ff',
    id: '1',
  },
  {
    description: 'Do the Dishes',
    createdAt: new Date('2024-03-15').toISOString(),
    color: 'blue',
    hexColor: '#0000ff',
    id: '2',
  },
  {
    description: 'Feed the Cat',
    createdAt: new Date('2024-03-15').toISOString(),
    color: 'blue',
    hexColor: '#0000ff',
    id: '3',
  },
];

export default class TodoModel {
  /**
     * getWidgets - return a list of widgets from the database
     * @returns {Array} - An array of widget objects.
     */
  static getTodos = () => todoList;

  /**
     * createTodo - Insert a new widget object into database
     * @param {Object} newTodo - The new todo to create in the database
     * @returns {Object} - The created todo.
     */
  static createTodo = (newTodo) => {
    newTodo.createdAt = new Date().toISOString();
    console.log('Created new Todo', newTodo);
    todoList.push(newTodo);
    return newTodo;
  };

  static getTodo = (id) => {
    const ToDo = todoList.find((t) => (t.id === id));
    return ToDo;
  };

  static deleteTodo = (id) => {
    console.log('Deleted Todo', id);

    const TodoCountBeforeDelete = todoList.length;
    todoList = todoList.filter((w) => (w.id !== id));

    if (TodoCountBeforeDelete === todoList.length) {
      return false;
    }

    return true;
  };

  static replaceTodo = (id, todo) => {
    const TodoIndex = todoList.findIndex((t) => (t.id === id));
    console.log('Replaced Todo', id, todo);

    if (TodoIndex > -1) {
      todoList.splice(TodoIndex, 1, todo);
      return todo;
    }

    return false;
  };

  static updateTodo = (id, todo) => {
    const todoIndex = todoList.findIndex((w) => (w.id === id));
    console.log('Updated Todo', id, todo);

    if (todoIndex > -1) {
      Object.keys(todo).forEach((key) => {
        if (key === 'id') {
          return;
        }

        todoList[todoIndex][key] = todo[key];
      });

      return todoList[todoIndex];
    }

    return false;
  };
}
