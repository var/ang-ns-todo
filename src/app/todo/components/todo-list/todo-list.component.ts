import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromTodo from '../../reducers/todo.reducer';
import {TodoService} from '~/app/todo/services/todo.service';
import {Todo} from '~/app/todo/models/Todo';

import * as TodoActions from '~/app/todo/actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private store: Store<fromTodo.State>) { }

  ngOnInit() {
    this.store.dispatch(TodoActions.LoadTodos);
    this.store.pipe(select(fromTodo.getTodos)).subscribe(todos => {
          this.todos = todos;
    });
  }
}
