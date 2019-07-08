import { Component, OnInit } from '@angular/core';
import {TodoActionTypes} from '../../todo/todo.actions';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Todo} from '../../todo/todo.reducer';
import * as fromStore from '../todo.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]> = this.store.select(state => state.todos);

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.store.dispatch({ type: TodoActionTypes.LoadTodos });
  }

}
