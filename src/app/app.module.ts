import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IconSpriteModule } from 'icon-sprite';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IconSpriteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
