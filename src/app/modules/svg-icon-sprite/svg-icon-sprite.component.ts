import { Component, Input } from '@angular/core';

/**
 * Renders a svg tag containing the use method to reference an icon by id
 */
@Component({
  selector: 'svg-icon-sprite',
  templateUrl: './svg-icon-sprite.component.html',
  styleUrls: ['./svg-icon-sprite.component.css']
})
export class SvgIconSpriteComponent {

  @Input() public src: string;
  @Input() public classes = 'icon';
  @Input() public iconSize: string;

  constructor() { }
}
