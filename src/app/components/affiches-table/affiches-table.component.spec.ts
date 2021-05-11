import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichesTableComponent } from './affiches-table.component';

describe('AffichesTableComponent', () => {
  let component: AffichesTableComponent;
  let fixture: ComponentFixture<AffichesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
