import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {catchError, map, mergeMap} from 'rxjs/operators';

import * as TodoActions from '~/app/todo/actions/todo.actions';

import { TodoService } from '../services/todo.service';
import {EMPTY} from 'rxjs';

@Injectable()
export class TodoEffects {

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.LoadTodos),
      mergeMap(() => this.todoService.getAll()
          .pipe(
              map(todos => (TodoActions.LoadTodoSuccess({payload: todos}))),
              catchError(() => EMPTY)
          ))
  ));

  constructor(private actions$: Actions, private todoService: TodoService) {}

}
