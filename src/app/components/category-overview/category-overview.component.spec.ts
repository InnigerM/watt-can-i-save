import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryOverviewComponent } from './category-overview.component';

describe('CategoryOverviewComponent', () => {
  let component: CategoryOverviewComponent;
  let fixture: ComponentFixture<CategoryOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
