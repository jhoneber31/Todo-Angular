import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { LoginComponent } from './features/login/login.component';
import { authReducer } from './core/store/reducers/auth.reducer';
import { todoReducer } from './core/store/reducers/todo.reducer';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({
      auth: authReducer,
      todo: todoReducer
    }, {}),
    StoreDevtoolsModule.instrument({ name: 'Test' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
