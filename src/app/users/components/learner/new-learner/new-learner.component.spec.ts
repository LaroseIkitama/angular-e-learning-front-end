import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLearnerComponent } from './new-learner.component';

describe('NewLearnerComponent', () => {
  let component: NewLearnerComponent;
  let fixture: ComponentFixture<NewLearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLearnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
