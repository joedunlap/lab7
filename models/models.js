/* eslint-disable import/extensions */
import { db } from '../lib/database.js';
import Constants from '../lib/constants.js';
/*
let todoList = [

  {
    description: 'Feed the Cat',
    createdAt: new Date('2024-03-15').toISOString(),
    color: 'blue',
    hexColor: '#0000ff',
    id: '3',
  },
];
*/
export default class TodoModel {
  static getTodos = async () => db.dbTODOS().find(
    {},
    { projection: Constants.DEFAULT_PROJECTION },
  ).toArray();

  static createTodo = async (newTodo) => {
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
  };

  static replaceTodo = async (id, todo) => {
    const result = await db.dbTODOS().replaceOne({ id }, todo);

    if (result.matchedCount === 1) {
      return todo;
    }

    return false;
  };

  static updateTodo = async (id, todo) => {
    console.log('Updated Todo', id, todo);

    const update = {
      $set: {},
    };

    Object.keys(todo).forEach((key) => {
      if (key === 'id') {
        return;
      }

      update.$set[key] = todo[key];
    });

    const result = await db.dbTODOS().findOneAndUpdate({ id }, update, { returnDocument: 'after' });

    if (result) {
      // eslint-disable-next-line no-underscore-dangle
      delete result._id;
      return result;
    }

    return false;
  };
}
