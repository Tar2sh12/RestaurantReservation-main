import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  signUp(data: any) {
    return this.http.post<any>(this.url + '/signup', data);
  }
  logIn(data: any) {
    return this.http.post<any>(this.url + '/login', data);
  }
  getAllRestaurants() {
    return this.http.get<any>(this.url + '/restaurants');
  }
  createReservation(data: any) {
    return this.http.post<any>(this.url + '/createReservation', data);
  }
  getAllReservation(data: any) {
    return this.http.post<any>(this.url + '/getallReservations', data);
  }
  getRestaurant(data: any) {
    return this.http.post<any>(this.url + '/getRestaurant', data);
  }
  deleteReservation(data: any) {
    return this.http.delete<any>(this.url + '/deleteReservation', { body: data });
  }
  updateReservation(data: any) {
    return this.http.put<any>(this.url + '/updateReservation', data);
  }
  getVendorReservations(data: any) {
    return this.http.post<any>(this.url + '/vendors/getRestReservations', data);
  }

  createRestaurant(data: any) {
    return this.http.post<any>(this.url + '/createRestaurant', data);
  }

  updateRestaurant(data: any) {
    return this.http.put<any>(this.url + '/updateRestaurant', data);
  }

  deleteRestaurant(data: any) {
    return this.http.delete<any>(this.url + '/deleteRestaurant', { body: data });
  }
  uploadimage(data: any) {
    return this.http.post<any>(this.url + '/upload', data);
  }
  getbrowserToken(data:any)
  {
    return this.http.post<any>(this.url+'/getbrowserToken',data);
  }
  uploadImage(data:any)
  {
    return this.http.post<any>(this.url+'/upload',data);
  }
}

