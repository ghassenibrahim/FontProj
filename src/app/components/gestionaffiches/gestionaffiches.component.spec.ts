import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionaffichesComponent } from './gestionaffiches.component';

describe('GestionaffichesComponent', () => {
  let component: GestionaffichesComponent;
  let fixture: ComponentFixture<GestionaffichesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionaffichesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionaffichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
