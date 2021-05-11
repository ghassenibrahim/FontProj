import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAfficheComponent } from './modif-affiche.component';

describe('ModifAfficheComponent', () => {
  let component: ModifAfficheComponent;
  let fixture: ComponentFixture<ModifAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
