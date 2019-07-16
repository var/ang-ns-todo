import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TodoDetailComponent } from '../components/todo-detail/todo-detail.component';
import {Store, StoreModule} from '@ngrx/store';
import * as fromTodo from '../reducers/todo.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from '../effects/todo.effects';
import {TodoRoutingModule} from '../routes/todo-routing.module.tns';

@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent],
  imports: [
    NativeScriptCommonModule,
      TodoRoutingModule,
    StoreModule.forFeature('todo', fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [Store],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TodoModule { }
