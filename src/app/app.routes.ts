import { Routes } from '@angular/router';

import { TodoListComponent } from './todo/todo-list/todo-list.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: TodoListComponent,
  },
];
