import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
// Has to be imported by relative path since update to 14
// import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { IconSpriteModule } from '../../projects/icon-sprite/src/lib/icon-sprite.module';
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
    CommonModule,
    ReactiveFormsModule,
    IconSpriteModule.forRoot({ path: environment.spritePath })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
