import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlertDeleteComponent } from './dialog-alert-delete.component';

describe('DialogAlertDeleteComponent', () => {
  let component: DialogAlertDeleteComponent;
  let fixture: ComponentFixture<DialogAlertDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAlertDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAlertDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
