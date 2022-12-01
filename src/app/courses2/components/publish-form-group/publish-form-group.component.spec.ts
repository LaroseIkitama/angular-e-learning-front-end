import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishFormGroupComponent } from './publish-form-group.component';

describe('PublishFormGroupComponent', () => {
  let component: PublishFormGroupComponent;
  let fixture: ComponentFixture<PublishFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
