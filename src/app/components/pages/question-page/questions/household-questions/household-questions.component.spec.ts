import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdQuestionsComponent } from './household-questions.component';

describe('HouseholdQuestionsComponent', () => {
  let component: HouseholdQuestionsComponent;
  let fixture: ComponentFixture<HouseholdQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseholdQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholdQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
