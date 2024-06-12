import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLoginComponent } from './login.component';

describe('SignupLoginComponent', () => {
  let component: SignupLoginComponent;
  let fixture: ComponentFixture<SignupLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupLoginComponent]
    });
    fixture = TestBed.createComponent(SignupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
