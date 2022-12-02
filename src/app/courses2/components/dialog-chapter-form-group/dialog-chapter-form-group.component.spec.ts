import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChapterFormGroupComponent } from './dialog-chapter-form-group.component';

describe('DialogChapterFormGroupComponent', () => {
  let component: DialogChapterFormGroupComponent;
  let fixture: ComponentFixture<DialogChapterFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChapterFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogChapterFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
