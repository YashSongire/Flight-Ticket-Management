import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

private baseURl = "http://localhost:8083/api/v1/flights";

  constructor(private httpclient : HttpClient) { }

  getflightlist() : Observable<Flight[]>{
    return this.httpclient.get<Flight[]>(`${this.baseURl}`);
  }

  createFlight(flightdata: any): Observable<any> {
    // Implement your logic to send a POST request to create a flight
    return this.httpclient.post(`${this.baseURl}`, flightdata);
  }

  getflightbyid() : Observable<Flight[]>{
    return this.httpclient.get<Flight[]>(`${this.baseURl}`);
  }
}
