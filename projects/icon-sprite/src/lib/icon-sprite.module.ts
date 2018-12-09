import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSpriteComponent } from './icon-sprite.component';
import { IconSpriteDirective } from './icon-sprite.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    IconSpriteComponent,
    IconSpriteDirective
  ],
  exports: [IconSpriteComponent]
})
export class IconSpriteModule { }
