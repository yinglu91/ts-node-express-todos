// import { Request, Response, NextFunction } from 'express';

// export const createTodo = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

// how to do the real work, connection to db...

import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

// post
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodod = new Todo(Math.random().toString(), text);

  TODOS.push(newTodod);

  res.status(201).json({ message: 'Created the todo', createdTodo: newTodod });
};

// get
export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

// patch
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
  if (todoIndex < 0) {
    throw new Error(`Could not find todo with todoId ${todoId}!`);
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

  res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });
};

// delete
export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
  if (todoIndex < 0) {
    throw new Error(`Could not find todo with todoId ${todoId}!`);
  }

  TODOS.splice(todoIndex, 1);

  res.json({ message: 'Todo deleted!' });
};
