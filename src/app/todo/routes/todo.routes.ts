import { Routes } from '@angular/router';
import {TodoListComponent} from '~/app/todo/components/todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',
        component: TodoListComponent
    }
];
