import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {catchError, concatMap, map, mergeMap} from 'rxjs/operators';
import { TodoActionTypes, TodoActions } from '../actions/todo.actions';

import { TodoService } from '../services/todo.service';
import {EMPTY} from 'rxjs';

@Injectable()
export class TodoEffects {


  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType(TodoActionTypes.LoadTodos),
      mergeMap(() => this.todoService.getAll()
          .pipe(
              map(todos => ({ type: TodoActionTypes.LoadTodoSuccess, payload: todos })),
              catchError(() => EMPTY)
          ))
  );

  constructor(private actions$: Actions<TodoActions>, private todoService: TodoService) {}

}
