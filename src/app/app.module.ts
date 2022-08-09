import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreCardComponent } from './components/store-card/store-card.component';
import { APIInterceptor } from 'src/api/api.interceptor';

@NgModule({
  declarations: [AppComponent, StoreCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
