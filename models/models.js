import { db } from '../lib/database.js';
import Constants from '../lib/constants.js';


let todoList = [

  {
    description: 'Feed the Cat',
    createdAt: new Date('2024-03-15').toISOString(),
    color: 'blue',
    hexColor: '#0000ff',
    id: '3',
  },
];

export default class TodoModel {
  static getTodos = async () => db.dbTODOS().find(
    {},
    { projection: Constants.DEFAULT_PROJECTION },
  ).toArray();


  static createTodo = async (newTodo) => {
    newTodo.createdAt = new Date().toISOString();
    console.log('Created new Todo', newTodo);
    await db.dbTODOS().insertOne(newTodo);

    const returnTodo = { ...newTodo };
    // eslint-disable-next-line no-underscore-dangle
    delete returnTodo._id;
    return returnTodo;
  };

  // eslint-disable-next-line max-len
  static getTodo = (id) => db.dbTODOS().findOne({ id }, { projection: Constants.DEFAULT_PROJECTION });

  static deleteTodo = (id) => {
    console.log('Deleted Todo', id);
    return db.dbTODOS().deleteOne({ id });

    

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
