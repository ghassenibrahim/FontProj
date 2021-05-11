import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAfficheComponent } from './display-affiche.component';

describe('DisplayAfficheComponent', () => {
  let component: DisplayAfficheComponent;
  let fixture: ComponentFixture<DisplayAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
