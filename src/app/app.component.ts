import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'SVG-Icon-Sprite';

  public icon = 'delete';
  public width = '64px';
  public color = 'red';

  changeIconPath(src) {
    this.icon = src.split('#')[1] === 'delete' ? 'star' : 'delete';
  }

  changeIconSize(width) {
    this.width = Number(width.replace('px', '')) + 10 + 'px';
  }

  changeIconColor(color) {
    this.color = color;
  }
}
