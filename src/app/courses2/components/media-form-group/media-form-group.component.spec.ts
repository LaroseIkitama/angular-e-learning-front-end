import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFormGroupComponent } from './media-form-group.component';

describe('MediaFormGroupComponent', () => {
  let component: MediaFormGroupComponent;
  let fixture: ComponentFixture<MediaFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
