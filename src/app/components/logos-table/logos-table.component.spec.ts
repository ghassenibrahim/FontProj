import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosTableComponent } from './logos-table.component';

describe('LogosTableComponent', () => {
  let component: LogosTableComponent;
  let fixture: ComponentFixture<LogosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogosTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
