import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LudiComponent } from './ludi.component';

describe('LudiComponent', () => {
  let component: LudiComponent;
  let fixture: ComponentFixture<LudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LudiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
