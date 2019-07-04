import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
