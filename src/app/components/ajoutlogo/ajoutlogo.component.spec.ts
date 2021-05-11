import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutlogoComponent } from './ajoutlogo.component';

describe('AjoutlogoComponent', () => {
  let component: AjoutlogoComponent;
  let fixture: ComponentFixture<AjoutlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
