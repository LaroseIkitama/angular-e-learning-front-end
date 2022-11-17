import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperCourseComponent } from './stepper-course.component';

describe('StepperCourseComponent', () => {
  let component: StepperCourseComponent;
  let fixture: ComponentFixture<StepperCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
