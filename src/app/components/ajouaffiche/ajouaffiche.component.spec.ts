import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouafficheComponent } from './ajouaffiche.component';

describe('AjouafficheComponent', () => {
  let component: AjouafficheComponent;
  let fixture: ComponentFixture<AjouafficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouafficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouafficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
