import { Injectable, Optional } from '@angular/core';
import { IconSpriteConfig } from './icon-sprite-config.model';

/**
 * To access a global sprite path
 */
@Injectable({
  providedIn: 'root'
})
export class IconSpriteService {

  public spritePath: string;

  constructor(@Optional() config: IconSpriteConfig) {
    if (config) {
      this.setPath(config.path);
    }
  }

  setPath(path: string) {
    this.spritePath = path;
  }

  getPath(): string {
    return this.spritePath;
  }
}
