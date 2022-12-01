import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSectionFormGroupComponent } from './dialog-section-form-group.component';

describe('DialogSectionFormGroupComponent', () => {
  let component: DialogSectionFormGroupComponent;
  let fixture: ComponentFixture<DialogSectionFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSectionFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSectionFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
