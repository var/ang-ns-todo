import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { TodoActionTypes, TodoActions } from './todo.actions';

import { TodoService } from './todo.service';

@Injectable()
export class TodoEffects {


  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType(TodoActionTypes.LoadTodos),
    concatMap(() => this.todoService.getAll()),
  );


  constructor(private actions$: Actions<TodoActions>, private todoService: TodoService) {}

}
