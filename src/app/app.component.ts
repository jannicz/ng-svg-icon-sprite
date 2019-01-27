import { Component, OnInit } from '@angular/core';
import { IconSpriteService } from 'ng-svg-icon-sprite';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public icon = 'star_100x100_viewbox';
  public width = '100px';
  public color = 'red';
  private env = environment;

  constructor(
    // Optionally inject the icon sprite service to set the filename path globally
    private iconSpriteService: IconSpriteService
  ) {}

  ngOnInit() {
    this.iconSpriteService.setPath(this.env.spritePath);
  }

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
