import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule as UsersApiModule } from '@api/users/api.module';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersApiModule.forRoot({ rootUrl: environment.usersApi }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
