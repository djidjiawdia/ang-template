import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { ConfigModule } from '@core/config/config.module';
import { appConfig } from '@core/config/app.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    ConfigModule.forRoot(appConfig),

    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
