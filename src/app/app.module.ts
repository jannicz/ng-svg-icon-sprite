import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { environment } from '../environments/environment';
import { ManipulatorComponent } from './manipulator/manipulator.component';


@NgModule({
  declarations: [
    AppComponent,
    ManipulatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IconSpriteModule.forRoot({ path: environment.spritePath })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
