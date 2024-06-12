import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarCComponent } from './navbar-c/navbar-c.component';
import { RestaurantCComponent } from './restaurant-c/restaurant-c.component';
import { CReservationsComponent } from './c-reservations/c-reservations.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { RestaurantsMapComponent } from './restaurants-map/restaurants-map.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { NavbarVComponent } from './navbar-v/navbar-v.component'
import { VRestaurantComponent } from './v-restaurant/v-restaurant.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { environment } from "./enviroment";
import { initializeApp } from "firebase/app";
initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupLoginComponent,
    SignupComponent,
    CustomerHomeComponent,
    VendorHomeComponent,
    NavbarCComponent,
    RestaurantCComponent,
    CReservationsComponent,
    RestaurantsMapComponent,
    UpdateReservationComponent,
    NavbarVComponent,
    VRestaurantComponent,
    CreateRestaurantComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    GoogleMapsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
