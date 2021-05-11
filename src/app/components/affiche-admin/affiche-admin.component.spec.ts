import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheAdminComponent } from './affiche-admin.component';

describe('AfficheAdminComponent', () => {
  let component: AfficheAdminComponent;
  let fixture: ComponentFixture<AfficheAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
