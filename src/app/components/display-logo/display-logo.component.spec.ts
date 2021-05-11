import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLogoComponent } from './display-logo.component';

describe('DisplayLogoComponent', () => {
  let component: DisplayLogoComponent;
  let fixture: ComponentFixture<DisplayLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
