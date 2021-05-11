import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAfficheComponent } from './edit-affiche.component';

describe('EditAfficheComponent', () => {
  let component: EditAfficheComponent;
  let fixture: ComponentFixture<EditAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
