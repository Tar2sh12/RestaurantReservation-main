import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CReservationsComponent } from './c-reservations.component';

describe('CReservationsComponent', () => {
  let component: CReservationsComponent;
  let fixture: ComponentFixture<CReservationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CReservationsComponent]
    });
    fixture = TestBed.createComponent(CReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
