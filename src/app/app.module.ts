import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoModule} from './todo/todo.module';
import {Store, StoreModule} from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
      StoreModule.forRoot({}),
    TodoModule,
      !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
