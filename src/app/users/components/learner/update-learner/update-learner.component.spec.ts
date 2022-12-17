import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLearnerComponent } from './update-learner.component';

describe('UpdateLearnerComponent', () => {
  let component: UpdateLearnerComponent;
  let fixture: ComponentFixture<UpdateLearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLearnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
