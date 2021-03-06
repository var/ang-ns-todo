import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {Todo} from '~/app/todo/models/Todo';
import * as TodoActions from '~/app/todo/actions/todo.actions';

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: [
    {
      id: '00000000000000000',
      createdAt: '00000000000000000',
      task: 'This is a dummy task',
      user: 'me'
    },
  ]
};

export const getTodoFeature = createFeatureSelector<State>('todo');

export const getTodos = createSelector(
    getTodoFeature,
    state => state.todos
);

export const todoReducer = createReducer(
    initialState,
    on(TodoActions.LoadTodos, state => ({
        ...state
    })),
    on(TodoActions.LoadTodoSuccess, (state, {payload}) => ({
        ...state,
        todos: payload
    })),
);

export function reducer(
    state: State | undefined,
    action: Action) {
  return todoReducer(state, action);
}
