import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoModule} from './todo/todo.module';
import {Store, StoreModule} from '@ngrx/store';
import {NativeScriptHttpClientModule} from 'nativescript-angular/http-client';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NativeScriptModule,
      NativeScriptHttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
      TodoModule
  ],
  providers: [Store],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
