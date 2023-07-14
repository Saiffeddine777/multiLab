import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendReviewEmailComponent } from './send-review-email.component';

describe('SendReviewEmailComponent', () => {
  let component: SendReviewEmailComponent;
  let fixture: ComponentFixture<SendReviewEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendReviewEmailComponent]
    });
    fixture = TestBed.createComponent(SendReviewEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
