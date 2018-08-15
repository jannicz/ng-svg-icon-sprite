import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSpriteComponent } from './icon-sprite.component';

describe('IconSpriteComponent', () => {
  let component: IconSpriteComponent;
  let fixture: ComponentFixture<IconSpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSpriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
