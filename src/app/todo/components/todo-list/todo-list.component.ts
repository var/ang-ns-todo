import { Component, OnInit } from '@angular/core';
import {TodoActionTypes} from '../../actions/todo.actions';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Todo} from '../../reducers/todo.reducer';
import * as fromTodo from '../../reducers/todo.reducer';
import {TodoService} from '~/app/todo/services/todo.service';

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
    this.store.dispatch({ type: TodoActionTypes.LoadTodos });
    this.store.pipe(select(fromTodo.getTodos)).subscribe(todos => {
          this.todos = todos;
    });
  }
}
