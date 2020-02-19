import { Injectable } from '@angular/core';
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
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  }

  public createCar(car: Car): Observable<Car> {
    const body = JSON.stringify(car);
            return this.http.post<Car>('/api/food/', body, httpOptions);
  }
}
