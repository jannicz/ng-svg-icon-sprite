import { Injectable } from '@angular/core';

/**
 * To set the sprite path (filename) globally for the app, when including the sprite
 * component, the path can be then omitted in the [src] attribute string
 */
@Injectable({
  providedIn: 'root'
})
export class IconSpriteService {

  public spritePath: string;

  constructor() { }

  setPath(path: string) {
    this.spritePath = path;
  }

  getPath(): string {
    return this.spritePath;
  }
}
