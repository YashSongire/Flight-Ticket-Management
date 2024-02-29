import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scheduledflight } from '../entities/scheduledflight';
import { DatePipe } from '@angular/common';
import { Schedule } from '../entities/schedule';
import { Airport } from '../entities/airport';

@Injectable({
  providedIn: 'root'
})
export class ScheduleflightService {

private baseUrl = "http://localhost:8083/api/v1";

  constructor(private httpclient : HttpClient, private datePipe: DatePipe) { }

  getscheduledflights() : Observable<Scheduledflight[]>{
    return this.httpclient.get<Scheduledflight[]>(`${this.baseUrl}/scheduleflight`);
  }

  searchFlights(source: string, destination: string, date: Date): Observable<Scheduledflight[]> {
    const formattedDate = this.datePipe.transform(date!, 'yyyy-MM-dd') || ''; 
    const params = new HttpParams()
      .set('sourceLocation', source)
      .set('destinationLocation', destination)
      .set('departures', formattedDate);

    return this.httpclient.get<Scheduledflight[]>(`${this.baseUrl}/scheduleflight/findschdeuledflights`, { params });
  }

  getschedules() : Observable<Schedule[]>{
    return this.httpclient.get<Schedule[]>(`${this.baseUrl}/schedules`);
  }

  createschedules(schedule:Schedule[]) : Observable<Schedule[]>{
    return this.httpclient.post<Schedule[]>(`${this.baseUrl}/schedules`, schedule);
  }

  getairports(): Observable<Airport[]>{
    return this.httpclient.get<Airport[]>(`${this.baseUrl}/airports`);
  }

  createairports(airport : Airport[]): Observable<Airport[]>{
    return this.httpclient.post<Airport[]>(`${this.baseUrl}/airports`, airport);
  }

  getairportsbyname(airportname: string): Observable<Airport[]>{
    return this.httpclient.get<Airport[]>(`${this.baseUrl}/airports/byname/`+`${airportname}`);
  }
}
