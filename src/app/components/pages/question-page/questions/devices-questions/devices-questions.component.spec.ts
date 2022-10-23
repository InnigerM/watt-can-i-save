import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesQuestionsComponent } from './devices-questions.component';

describe('DevicesQuestionsComponent', () => {
  let component: DevicesQuestionsComponent;
  let fixture: ComponentFixture<DevicesQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicesQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
