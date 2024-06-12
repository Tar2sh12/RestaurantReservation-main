import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VRestaurantComponent } from './v-restaurant.component';

describe('VRestaurantComponent', () => {
  let component: VRestaurantComponent;
  let fixture: ComponentFixture<VRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VRestaurantComponent]
    });
    fixture = TestBed.createComponent(VRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
