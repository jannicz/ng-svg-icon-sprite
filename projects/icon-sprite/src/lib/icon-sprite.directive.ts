import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

/**
 * Set your own attribute key/value pairs on the generated SVG element, i.e. focusable="false"
 */
@Directive({
  selector: '[IconSpriteAttr]'
})
export class IconSpriteDirective implements OnInit {

  @Input() attribute: [string, string];

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit() {
  	if (this.attribute[0] && this.attribute[1]) {
  	  this.renderer.setAttribute(this.el.nativeElement, this.attribute[0], this.attribute[1]);
  	} else if (this.attribute[0]) {
      this.renderer.setAttribute(this.el.nativeElement, this.attribute[0], '');
    }
  }
}
