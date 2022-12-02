import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSectionUpdateFormGroupComponent } from './dialog-section-update-form-group.component';

describe('DialogSectionUpdateFormGroupComponent', () => {
  let component: DialogSectionUpdateFormGroupComponent;
  let fixture: ComponentFixture<DialogSectionUpdateFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSectionUpdateFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSectionUpdateFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
