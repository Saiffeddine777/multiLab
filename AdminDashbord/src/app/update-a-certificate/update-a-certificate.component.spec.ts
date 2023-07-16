import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateACertificateComponent } from './update-a-certificate.component';

describe('UpdateACertificateComponent', () => {
  let component: UpdateACertificateComponent;
  let fixture: ComponentFixture<UpdateACertificateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateACertificateComponent]
    });
    fixture = TestBed.createComponent(UpdateACertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
