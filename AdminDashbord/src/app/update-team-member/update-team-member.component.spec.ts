import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeamMemberComponent } from './update-team-member.component';

describe('UpdateTeamMemberComponent', () => {
  let component: UpdateTeamMemberComponent;
  let fixture: ComponentFixture<UpdateTeamMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTeamMemberComponent]
    });
    fixture = TestBed.createComponent(UpdateTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
