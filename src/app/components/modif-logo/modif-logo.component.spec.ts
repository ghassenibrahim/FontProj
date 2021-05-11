import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifLogoComponent } from './modif-logo.component';

describe('ModifLogoComponent', () => {
  let component: ModifLogoComponent;
  let fixture: ComponentFixture<ModifLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
