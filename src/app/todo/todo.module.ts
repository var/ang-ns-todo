import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import {Store, StoreModule} from '@ngrx/store';
import * as fromTodo from './todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo.effects';
import {TodoService} from '~/app/todo/todo.service';

@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [Store]
})
export class TodoModule { }
