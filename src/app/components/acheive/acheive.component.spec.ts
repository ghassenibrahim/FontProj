import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheiveComponent } from './acheive.component';

describe('AcheiveComponent', () => {
  let component: AcheiveComponent;
  let fixture: ComponentFixture<AcheiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
