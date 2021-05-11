import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionlogosComponent } from './gestionlogos.component';

describe('GestionlogosComponent', () => {
  let component: GestionlogosComponent;
  let fixture: ComponentFixture<GestionlogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionlogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionlogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
