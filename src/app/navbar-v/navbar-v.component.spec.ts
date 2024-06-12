import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVComponent } from './navbar-v.component';

describe('NavbarVComponent', () => {
  let component: NavbarVComponent;
  let fixture: ComponentFixture<NavbarVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarVComponent]
    });
    fixture = TestBed.createComponent(NavbarVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
