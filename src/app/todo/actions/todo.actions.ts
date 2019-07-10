import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  LoadTodoSuccess = '[Todo] Load Success',
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;
}

export class LoadTodoSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodoSuccess;
  constructor(public payload: any) {}
}


export type TodoActions = LoadTodos | LoadTodoSuccess;
