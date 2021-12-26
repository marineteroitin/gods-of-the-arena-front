import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmperorFightCreationComponent } from './emperor-fight-creation.component';

describe('EmperorFightCreationComponent', () => {
  let component: EmperorFightCreationComponent;
  let fixture: ComponentFixture<EmperorFightCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmperorFightCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmperorFightCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
