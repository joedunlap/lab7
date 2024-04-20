import TodoListCoordinator from '../coordinators/coordinator.js';

export const getTodos = async (req, res, next) => {
  try {
    const result = TodoListCoordinator.getTodos();
    res.status(200).json(result);
  } catch (ex) {
    next(ex);
  }
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
  try {
    const result = await TodoListCoordinator.getTodo(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (ex) {
    next(ex);
  }
};
export const deleteTodo = async (req, res, next) => {
  try {
    await TodoListCoordinator.deleteTodo(req.params.id);
    res.status(204).json();
  } catch (ex) {
    next(ex);
  }
};

export const replaceTodo = async (req, res, next) => {
  try {
    const result = TodoListCoordinator.replaceTodo(req.params.id, req.body);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (ex) {
    next(ex);
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const result = TodoListCoordinator.updateTodo(req.params.id, req.body);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (ex) {
    next(ex);
  }
};
