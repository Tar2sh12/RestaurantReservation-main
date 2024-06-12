import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCComponent } from './restaurant-c.component';

describe('RestaurantCComponent', () => {
  let component: RestaurantCComponent;
  let fixture: ComponentFixture<RestaurantCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantCComponent]
    });
    fixture = TestBed.createComponent(RestaurantCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
