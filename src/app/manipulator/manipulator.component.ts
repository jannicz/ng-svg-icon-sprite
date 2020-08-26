import { Component, OnInit } from '@angular/core';
import { IconForm } from './IconForm.model';

@Component({
  selector: 'app-manipulator',
  templateUrl: './manipulator.component.html',
  styleUrls: ['./manipulator.component.scss']
})
export class ManipulatorComponent implements OnInit {

  private initialSize = 240;

  private initialColor = '#ab3030';

  public icons = [
    { src: 'assets/sprites/sprite.svg#star_100x100_viewbox', name: 'Star (100 x 100px)', viewBoxX2: 100 },
    { src: 'assets/sprites/sprite.svg#delete_70x70', name: 'Trash (70 x 70px)', viewBoxX2: 70 },
    { src: 'assets/sprites/sprite.svg#circle_24x24-viewbox', name: 'Circle (24 x 24px)', viewBoxX2: 24 },
    { src: 'assets/sprites/image-sprite.svg#multicolor-image', name: 'Multicolor (250 x 250px)', viewBoxX2: 250 }
  ];

  public model: IconForm;

  public viewBox: string;

  public color = 'color: #ab3030';

  constructor() { }

  ngOnInit(): void {
    this.initialize();
    this.calculateViewBox();
  }

  initialize(): void {
    this.model = new IconForm(
      this.icons[0].src,
      this.icons[0].name,
      this.initialSize,
      true,
      0,
      0,
      this.icons[0].viewBoxX2,
      this.icons[0].viewBoxX2,
      this.initialColor,
      // styled-icon
      'some-class-name'
    );
  }

  reset(): void {
    this.initialize();
    this.calculateViewBox();
  }

  applyChange(): void {
    const model = this.icons.find(i => i.name === this.model.name);
    console.log('icon model =>', model.src);
    this.model.source = model.src;

    if (this.model.hasViewBox) {
      // Apply viewBox for each particular icon
      switch (this.model.source) {
        case this.icons[0].src:
          this.model.viewboxY2 = this.model.viewboxX2 = this.icons[0].viewBoxX2;
          break;
        case this.icons[1].src:
          this.model.viewboxY2 = this.model.viewboxX2 = this.icons[1].viewBoxX2;
          break;
        case this.icons[2].src:
          this.model.viewboxY2 = this.model.viewboxX2 = this.icons[2].viewBoxX2;
          break;
        case this.icons[3].src:
          this.model.viewboxY2 = this.model.viewboxX2 = this.icons[3].viewBoxX2;
          break;
      }

      this.calculateViewBox();
    }
  }

  calculateViewBox(): void {
    this.viewBox = this.model.viewboxX1 + ' ' + this.model.viewboxY1 + ' ' + this.model.viewboxX2 + ' ' + this.model.viewboxY2;
  }
}
