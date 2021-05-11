import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAfficheAdminComponent } from './gestion-affiche-admin.component';

describe('GestionAfficheAdminComponent', () => {
  let component: GestionAfficheAdminComponent;
  let fixture: ComponentFixture<GestionAfficheAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAfficheAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAfficheAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
