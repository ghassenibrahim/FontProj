import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouutComponent } from './ajouut.component';

describe('AjouutComponent', () => {
  let component: AjouutComponent;
  let fixture: ComponentFixture<AjouutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
