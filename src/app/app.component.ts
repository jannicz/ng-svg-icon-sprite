import { Component, OnInit } from '@angular/core';
import { IconSpriteService } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public icon = 'star_100x100_viewbox';
  public width = '100px';
  public color = 'red';
  public changed = false;
  public changeDone = false;

  constructor(
    // Optionally inject the icon sprite service to set path manually
    private iconSpriteService: IconSpriteService
  ) {}

  ngOnInit() {}

  changeIconPath(src) {
    this.icon = src.split('#')[1] === 'delete_70x70' ? 'star_100x100_viewbox' : 'delete_70x70';
    console.log('changed path', this.icon);
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

  // Optionally, change the default sprite path during runtime
  changeDefaultSpritePath() {
    this.changed = true;
    this.iconSpriteService.setPath('assets/sprites-secondary/sprite.svg');
    console.log('changeDefaultSpritePath', this.iconSpriteService.getPath());

    setTimeout(() => {
      // Demo purpose: force change detection to re-render
      this.changed = false;
    }, 0);
  }
}
