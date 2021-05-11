import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiontypesComponent } from './gestiontypes.component';

describe('GestiontypesComponent', () => {
  let component: GestiontypesComponent;
  let fixture: ComponentFixture<GestiontypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestiontypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiontypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
