import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormationComponent } from './new-formation.component';

describe('NewFormationComponent', () => {
  let component: NewFormationComponent;
  let fixture: ComponentFixture<NewFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
