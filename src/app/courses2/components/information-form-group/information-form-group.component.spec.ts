import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationFormGroupComponent } from './information-form-group.component';

describe('InformationFormGroupComponent', () => {
  let component: InformationFormGroupComponent;
  let fixture: ComponentFixture<InformationFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
