import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulatorComponent } from './manipulator.component';

describe('ManipulatorComponent', () => {
  let component: ManipulatorComponent;
  let fixture: ComponentFixture<ManipulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
