import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLogoAdminComponent } from './gestion-logo-admin.component';

describe('GestionLogoAdminComponent', () => {
  let component: GestionLogoAdminComponent;
  let fixture: ComponentFixture<GestionLogoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLogoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLogoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
