import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IconSpriteModule.forRoot({ path: environment.spritePath })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
