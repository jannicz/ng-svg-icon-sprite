import { Component, OnInit } from '@angular/core';
import { IconForm } from './IconForm.model';

@Component({
  selector: 'app-manipulator',
  templateUrl: './manipulator.component.html',
  styleUrls: ['./manipulator.component.scss']
})
export class ManipulatorComponent implements OnInit {

  public icons = [
    { src: 'star_100x100_viewbox', name: 'Star (100 x 100px)'},
    { src: 'delete_70x70', name: 'Trash (70 x 70px)'},
    { src: 'circle_24x24-viewbox', name: 'Circle (24 x 24px)'},
    { src: 'assets/sprites/image-sprite.svg#multicolor-image', name: 'Multicolor Image'}
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
      240,
      true,
      0,
      0,
      100,
      100,
      '#ab3030',
      // styled-icon
      'some-class-name'
    );
  }

  reset(): void {
    this.initialize();
  }

  applyChange(): void {
    const model = this.icons.find(i => i.name === this.model.name);
    console.log('icon model =>', model);
    this.model.source = model.src;

    if (this.model.source.includes('multicolor-image')) {
      // Disable the viewBox for this particular icon
      this.model.hasViewBox = false;
    }
  }

  calculateViewBox(): void {
    this.viewBox = this.model.viewboxX1 + ' ' + this.model.viewboxY1 + ' ' + this.model.viewboxX2 + ' ' + this.model.viewboxY2;
  }
}
