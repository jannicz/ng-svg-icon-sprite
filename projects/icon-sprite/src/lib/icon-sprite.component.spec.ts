import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconSpriteComponent } from './icon-sprite.component';
import { IconSpriteDirective } from './icon-sprite.directive';

describe('IconSpriteComponent', () => {
  let component: IconSpriteComponent;
  let fixture: ComponentFixture<IconSpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IconSpriteComponent,
        IconSpriteDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the icon-sprite component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.classes).toBe('icon', 'off at first');
    expect(component.width).toBe('100%', 'off at first');

    const nativeElement: HTMLElement = fixture.nativeElement;
    const svgElement = nativeElement.querySelector('svg');
    const renderedHeightAttr = svgElement.getAttribute('height');

    expect(renderedHeightAttr).toEqual('100%');
  });

  it('should render SVG node with a use reference', () => {
    component.src = 'sprite#star';
    fixture.detectChanges();

    const nativeElement: HTMLElement = fixture.nativeElement;
    const svgElement = nativeElement.querySelector('svg');
    const useElement = nativeElement.querySelector('use');
    const xlinkttr = useElement.getAttribute('xlink:href');

    expect(svgElement).toBeTruthy();
    expect(svgElement.classList.contains('icon')).toBe(true);
    expect(useElement).toBeTruthy();
    expect(xlinkttr).toBe('sprite#star');
  });

  it('should correctly render one attribute via its directive', () => {
    component.attribute = ['aria-hidden', 'true'];
    fixture.detectChanges();

    const svgEl: HTMLElement = fixture.nativeElement.querySelector('svg');
    const ariaAttr = svgEl.getAttribute('aria-hidden');

    expect(ariaAttr).toBe('true');
  });

  it('should correctly render multiple input classes', () => {
    component.classes = 'foo bar baz';
    fixture.detectChanges();

    const svgEl: HTMLElement = fixture.nativeElement.querySelector('svg');
    const classLi = svgEl.classList;

    expect(classLi).toContain('foo');
    expect(classLi).toContain('bar');
    expect(classLi).toContain('baz');
    expect(classLi).not.toContain('baaa');
  });

  it('should correctly render a viewBox of 0 0 100 100', () => {
    component.viewBox = '0 0 100 100';
    fixture.detectChanges();

    const svgEl: HTMLElement = fixture.nativeElement.querySelector('svg');
    const viewBoxAttr = svgEl.getAttribute('viewBox');
    const presAspRatAttr = svgEl.getAttribute('preserveAspectRatio');

    expect(viewBoxAttr).toBe('0 0 100 100');
    expect(presAspRatAttr).toBe('xMinYMax meet');
  });

  it('should correctly render a title node with text and id', () => {
    component.title = 'A title';
    component.src = 'sprite#star';
    fixture.detectChanges();

    const titleEl: HTMLElement = fixture.nativeElement.querySelector('title');
    const titleText = titleEl.textContent;
    const idAttr = titleEl.getAttribute('id');

    expect(titleText).toBe('A title');
    expect(idAttr).toBe('star-title');
  });

  it('should correctly render multiple attributes via its directive', () => {
    component.attribute = [['aria-hidden', 'true'], ['role', 'img']] as Array<[string, string]>;
    fixture.detectChanges();

    const svgEl: HTMLElement = fixture.nativeElement.querySelector('svg');
    const ariaAttr = svgEl.getAttribute('aria-hidden');
    const roleAttr = svgEl.getAttribute('role');

    expect(ariaAttr).toBe('true');
    expect(roleAttr).toBe('img');
  });

  it('should render combinations of viewBox and attribute directive', () => {
    component.src = 'sprite#star';
    component.attribute = ['aria-hidden', 'false'];
    component.viewBox = '0 0 50 50';
    fixture.detectChanges();

    const svgEl: HTMLElement = fixture.nativeElement.querySelector('svg');
    const viewBoxAttr = svgEl.getAttribute('viewBox');
    const ariaAttr = svgEl.getAttribute('aria-hidden');

    expect(ariaAttr).toBe('false');
    expect(viewBoxAttr).toBe('0 0 50 50');
  });
});
