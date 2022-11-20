import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopupSectionTitleComponent } from './modal-popup-section-title.component';

describe('ModalPopupSectionTitleComponent', () => {
  let component: ModalPopupSectionTitleComponent;
  let fixture: ComponentFixture<ModalPopupSectionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPopupSectionTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPopupSectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
