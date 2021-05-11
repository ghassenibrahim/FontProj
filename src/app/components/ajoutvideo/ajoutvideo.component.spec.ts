import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutvideoComponent } from './ajoutvideo.component';

describe('AjoutvideoComponent', () => {
  let component: AjoutvideoComponent;
  let fixture: ComponentFixture<AjoutvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
