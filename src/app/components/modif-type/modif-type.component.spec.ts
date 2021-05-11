import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifTypeComponent } from './modif-type.component';

describe('ModifTypeComponent', () => {
  let component: ModifTypeComponent;
  let fixture: ComponentFixture<ModifTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
