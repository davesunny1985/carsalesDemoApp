import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../models/car.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  carBaseUrl: string = '';
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.carBaseUrl = baseUrl + 'api/car';
  }

  public createCar(car: Car): Observable<Car> {
    const body = JSON.stringify(car);
    return this.http.post<Car>(this.carBaseUrl, body, httpOptions);
  }
}
