import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

/**
 * Set your own attribute key/value pairs on the generated SVG element, i.e. focusable="false"
 */
@Directive({
  selector: '[svgIconSpriteAttr]'
})
export class IconSpriteDirective implements OnInit {

  @Input() attribute: [string, string] | Array<[string, string]>;

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit() {
    if (Array.isArray(this.attribute[0])) {
      const attributeArr = this.attribute as Array<[string, string]>;

      attributeArr.forEach((obj) => {
        this.renderer.setAttribute(this.el.nativeElement, obj[0], obj[1] ? obj[1] : '');
      });
    } else {
      const attribute = this.attribute as [string, string];

      if (attribute[0]) {
        this.renderer.setAttribute(this.el.nativeElement, attribute[0], attribute[1] ? attribute[1] : '');
      }
    }
  }
}
