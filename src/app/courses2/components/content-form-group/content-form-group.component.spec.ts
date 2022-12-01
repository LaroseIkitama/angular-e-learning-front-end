import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFormGroupComponent } from './content-form-group.component';

describe('ContentFormGroupComponent', () => {
  let component: ContentFormGroupComponent;
  let fixture: ComponentFixture<ContentFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
