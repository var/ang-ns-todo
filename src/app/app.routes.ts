import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/todos',
        pathMatch: 'full',
    },
    {
        path: 'todos',
        loadChildren: () => import('~/app/todo/modules/todo.module').then(m => m.TodoModule)
    },
];
