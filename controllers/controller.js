import TodoListCoordinator from '../coordinators/coordinator.js';

export const getTodos = async (req, res, next) => {
  const result = TodoListCoordinator.getTodos();

  res.status(200).json(result);
};

export const createTodo = async (req, res, next) => {
  try {
    const result = TodoListCoordinator.createTodo(req.body);
    res.status(201).json(result);
  } catch (ex) {
    next(ex);
  }
};

export const getTodo = async (req, res, next) => {
  const result = TodoListCoordinator.getTodo(req.params.id);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};

export const deleteTodo = async (req, res, next) => {
  const result = TodoListCoordinator.deleteTodo(req.params.id);

  if (result) {
    res.status(204).json();
  } else {
    res.status(404).json();
  }
};

export const replaceTodo = async (req, res, next) => {
  const result = TodoListCoordinator.replaceTodo(req.params.id, req.body);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};

export const updateTodo = async (req, res, next) => {
  const result = TodoListCoordinator.updateTodo(req.params.id, req.body);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};