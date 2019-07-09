import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import {Store, StoreModule} from '@ngrx/store';
import {TodoService} from './todo.service';
import * as fromTodo from './todo.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from './todo.effects';

@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent],
  imports: [
    NativeScriptCommonModule,
    StoreModule.forFeature('todo', fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [Store],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TodoModule { }
