import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsTableComponent } from './projets-table.component';

describe('ProjetsTableComponent', () => {
  let component: ProjetsTableComponent;
  let fixture: ComponentFixture<ProjetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
