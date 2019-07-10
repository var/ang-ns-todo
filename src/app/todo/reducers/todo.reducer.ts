import {TodoActions, TodoActionTypes} from '../actions/todo.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';

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
  todos: [
    {
      id: 'wrf',
      createdAt: 'wfrwf',
      task: 'wfwefwefwef',
      user: 'wefwefwefwefwefwef'
    },
  ]
};

export const getTodoFeature = createFeatureSelector<State>('todo');

export const getTodos = createSelector(
    getTodoFeature,
    state => state.todos
);

export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.LoadTodos:
      return state;
      case TodoActionTypes.LoadTodoSuccess:
        return {
          ...state,
          todos: action.payload
        };
    default:
      return state;
  }
}
