import {createAction, props} from '@ngrx/store';

export const LoadTodos = createAction('[Todo] Load Todos');
export const LoadTodoSuccess = createAction('[Todo] Load Success', props<{payload: any}>());
