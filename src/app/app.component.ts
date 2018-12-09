import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'SVG-Icon-Sprite';

  public icon = 'star_100x100_viewbox';
  public width = '100px';
  public color = 'red';

  changeIconPath(src) {
    this.icon = src.split('#')[1] === 'delete_70x70' ? 'star_100x100_viewbox' : 'delete_70x70';
  }

  changeIconSizePlus(width) {
    this.width = Number(width.replace('px', '')) + 15 + 'px';
  }

  changeIconSizeMinus(width) {
    this.width = Number(width.replace('px', '')) - 15 + 'px';
  }

  changeIconColor(color) {
    this.color = color;
  }
}
