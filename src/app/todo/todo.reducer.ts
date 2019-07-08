
import { TodoActions, TodoActionTypes } from './todo.actions';

export interface Todo {
  id?: string;
  createdAt?: string;
  task?: string;
  user?: string;
}

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: []
};

export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {

    case TodoActionTypes.LoadTodos:
      return state;

    default:
      return state;
  }
}
