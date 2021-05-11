import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVideoAdminComponent } from './gestion-video-admin.component';

describe('GestionVideoAdminComponent', () => {
  let component: GestionVideoAdminComponent;
  let fixture: ComponentFixture<GestionVideoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionVideoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVideoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
