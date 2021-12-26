import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmperorComponent } from './emperor.component';

describe('EmperorComponent', () => {
  let component: EmperorComponent;
  let fixture: ComponentFixture<EmperorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmperorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmperorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
