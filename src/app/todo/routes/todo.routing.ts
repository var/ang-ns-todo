import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import {TodoListComponent} from '~/app/todo/components/todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',
        component: TodoListComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class FeatureRoutingModule { }
