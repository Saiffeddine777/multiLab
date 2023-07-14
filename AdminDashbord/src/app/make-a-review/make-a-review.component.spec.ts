import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAReviewComponent } from './make-a-review.component';

describe('MakeAReviewComponent', () => {
  let component: MakeAReviewComponent;
  let fixture: ComponentFixture<MakeAReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeAReviewComponent]
    });
    fixture = TestBed.createComponent(MakeAReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
