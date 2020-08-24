import { Component, OnInit } from '@angular/core';
import { IconSpriteService } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public changed = false;
  public changeDone = false;

  constructor(
    // Optionally inject the icon sprite service to set path manually
    private iconSpriteService: IconSpriteService
  ) {}

  ngOnInit() {}

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
