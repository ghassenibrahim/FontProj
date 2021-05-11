import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDemandeComponent } from './display-demande.component';

describe('DisplayDemandeComponent', () => {
  let component: DisplayDemandeComponent;
  let fixture: ComponentFixture<DisplayDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
