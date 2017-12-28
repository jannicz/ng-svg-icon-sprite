import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconSpriteComponent } from './svg-icon-sprite.component';

describe('SvgIconSpriteComponent', () => {
  let component: SvgIconSpriteComponent;
  let fixture: ComponentFixture<SvgIconSpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgIconSpriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgIconSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
