import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TodoDetailComponent } from '../components/todo-detail/todo-detail.component';
import {Store, StoreModule} from '@ngrx/store';
import * as fromTodo from '../reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from '../effects/todo.effects';
import {TodoRoutingModule} from '~/app/todo/routes/todo-routing.module';

@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature('todo', fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [Store]
})
export class TodoModule { }
