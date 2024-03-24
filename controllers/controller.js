import TodoListCoordinator from '../coordinators/coordinator.js';

/**
 * todoList - Return a list of todos.
 * @async
 * @param {Object} req - Express Request Object
 * @param {Object} res - Express Response Object
 * @param {Function} next - Express "next" middleware function
 */
export const todoList = async (req, res, next) => {
  console.log('Controller : getTodos()');

  const result = TodoListCoordinator.todoList();

  res.status(200).json(result);
};

export const createTodo = async (req, res, next) => {
  console.log('Controller : createTodo()');

  try {
    const result = TodoListCoordinator.createTodo(req.body);
    res.status(201).json(result);
  } catch (ex) {
    next(ex);
  }
};

export const getTodo = async (req, res, next) => {
  console.log(`Controller : getTodo(${req.params.id})`);

  const result = TodoListCoordinator.getTodo(req.params.id);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};

export const deleteTodo = async (req, res, next) => {
  console.log(`Controller : deleteWidget(${req.params.id})`);

  const result = TodoListCoordinator.deleteTodo(req.params.id);

  if (result) {
    res.status(204).json();
  } else {
    res.status(404).json();
  }
};

export const replaceTodo = async (req, res, next) => {
  console.log(`Controller : replaceTodo(${req.params.id})`);

  const result = TodoListCoordinator.replaceTodo(req.params.id, req.body);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};

export const updateTodo = async (req, res, next) => {
  console.log(`Controller : updateTodo(${req.params.id})`);

  const result = TodoListCoordinator.updateTodo(req.params.id, req.body);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};