import { Routes } from '@angular/router';

import { TodoListComponent } from './todo/components/todo-list/todo-list.component';
import {TodoDetailComponent} from './todo/components/todo-detail/todo-detail.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/todos',
      pathMatch: 'full',
  },
  {
      path: 'todos',
      component: TodoListComponent,
  },
    {
        path: 'todo',
        component: TodoDetailComponent,
    },
];
