import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {JwSocialButtonsModule} from 'jw-angular-social-buttons'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JwSocialButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
