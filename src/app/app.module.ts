import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoModule} from './todo/modules/todo.module';
import {Store, StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
      StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    TodoModule,
      !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
