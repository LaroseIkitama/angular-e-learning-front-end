import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSectionComponent } from './dialog-section.component';

describe('DialogSectionComponent', () => {
  let component: DialogSectionComponent;
  let fixture: ComponentFixture<DialogSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
