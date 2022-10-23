import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterQuestionsComponent } from './water-questions.component';

describe('WaterQuestionsComponent', () => {
  let component: WaterQuestionsComponent;
  let fixture: ComponentFixture<WaterQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
