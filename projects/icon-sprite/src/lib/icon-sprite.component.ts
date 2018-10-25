import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-icon-sprite',
  styleUrls: ['./icon-sprite.component.css'],
  templateUrl: './icon-sprite.component.html'
})
export class IconSpriteComponent {

  @Input() public src: string;
  @Input() public classes = 'icon';
  @Input() public width = '100%';
  @Input() public height: string;
  @Input() public viewBox: string;
  @Input() public preserveAspectRatio = 'xMinYMax meet';
  @Input() public attribute: [string, string];

  constructor() { }
}
