let todoList = [
  {
    id: '1',
    description: 'Laundry',
    createdAt: 2024-03-15T00:03:16.625Z,
  },
  {
    id: '2',
    description: 'Do the Dishes',
    createdAt: 2024-03-15T00:03:16.625Z,
  },
  {
    id: '3',
    description: 'Feed the Cat',
    createdAt: 2024-03-15T00:03:16.625Z,
  },
];

export default class TodoModel {
  /**
     * getWidgets - return a list of widgets from the database
     * @returns {Array} - An array of widget objects.
     */
  static listTodos = () => {
    console.log('\t\t Model : listTodos()');
    return todoList;
  };

  /**
     * createTodo - Insert a new widget object into database
     * @param {Object} newTodo - The new todo to create in the database
     * @returns {Object} - The created todo.
     */
  static createTodo = (newTodo) => {
    console.log('\t\t Model : createTodo()');
    todoList.push(newTodo);
    return newTodo;
  };

  static getTodo = (id) => {
    console.log('\t\t Model : getTodo()');

    const ToDo = todoList.find((t) => (t.id === id));
    return ToDo;
  };

  static deleteTodo = (id) => {
    console.log('\t\t Model : deleteTodo()');

    const TodoCountBeforeDelete = todoList.length;
    todoList = todoList.filter((w) => (w.id !== id));

    if (TodoCountBeforeDelete === todoList.length) {
      return false;
    }

    return true;
  };

  static replaceTodo = (id, todo) => {
    const TodoIndex = todoList.findIndex((t) => (t.id === id));

    if (TodoIndex > -1) {
      todoList.splice(TodoIndex, 1, todo);
      return todo;
    }

    return false;
  };

  static updateTodo = (id, todo) => {
    const todoIndex = todoList.findIndex((w) => (w.id === id));

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
