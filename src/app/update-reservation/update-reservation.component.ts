import { Component } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent {
  constructor(private restaurant: RestaurantsService , private router : Router)
  {

  }
}
