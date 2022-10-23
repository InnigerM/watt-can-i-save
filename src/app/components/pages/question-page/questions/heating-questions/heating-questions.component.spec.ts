import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingQuestionsComponent } from './heating-questions.component';

describe('HeatingQuestionsComponent', () => {
  let component: HeatingQuestionsComponent;
  let fixture: ComponentFixture<HeatingQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatingQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatingQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
