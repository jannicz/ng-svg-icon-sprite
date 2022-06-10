import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    ReactiveFormsModule,
    IconSpriteModule.forRoot({ path: environment.spritePath })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
