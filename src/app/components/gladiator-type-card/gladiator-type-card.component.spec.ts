import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GladiatorTypeCardComponent } from './gladiator-type-card.component';

describe('GladiatorTypeCardComponent', () => {
  let component: GladiatorTypeCardComponent;
  let fixture: ComponentFixture<GladiatorTypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GladiatorTypeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GladiatorTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
