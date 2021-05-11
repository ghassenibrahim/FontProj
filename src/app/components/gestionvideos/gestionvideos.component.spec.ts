import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionvideosComponent } from './gestionvideos.component';

describe('GestionvideosComponent', () => {
  let component: GestionvideosComponent;
  let fixture: ComponentFixture<GestionvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
