import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.css'
})
export class FlightListComponent implements OnInit{

  flights !: Flight[];

  searchText : string = '';

  constructor(private flightService : FlightService){

  }

ngOnInit(): void {
  this.getflights();
}

private getflights(){
  this.flightService.getflightlist().subscribe(data => {
    this.flights = data;
  });
}


}