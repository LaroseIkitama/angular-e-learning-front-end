import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChapterUpdateFormGroupComponent } from './dialog-chapter-update-form-group.component';

describe('DialogChapterUpdateFormGroupComponent', () => {
  let component: DialogChapterUpdateFormGroupComponent;
  let fixture: ComponentFixture<DialogChapterUpdateFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChapterUpdateFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogChapterUpdateFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
