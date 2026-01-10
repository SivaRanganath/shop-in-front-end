import { APP_INITIALIZER, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LogIn } from './log-in/log-in';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignIn } from './sign-in/sign-in';
import { AppCommonModule } from './common-module';
import { DashboardModule } from './dashboard/dashboard/dashboard-module';
import { AuthenticationService } from './shared/services/authentication';
import { firstValueFrom } from 'rxjs';

export function initAuth(auth: AuthenticationService) {
  return () => firstValueFrom(auth.authenticateUser());
}

@NgModule({
  declarations: [
    App,
    LogIn,
    SignIn
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppCommonModule,
    DashboardModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {
      provide: APP_INITIALIZER,
      useFactory: initAuth,
      deps: [AuthenticationService],
      multi: true
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
