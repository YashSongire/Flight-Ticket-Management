import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  

  Flights !: Flight[]
  flight !: Flight;

  ngOnInit(): void {
this.flservice.getflightlist().subscribe(data => {
  this.Flights =data;
  console.log(this.Flights);
  
})
  }


constructor(private flservice : FlightService){

}

  findObjectById(id: number): any {
    let myarray = this.Flights;
    console.log(myarray);
    return myarray.find(obj => obj.flightId === id);
  }

  getit(){
  this.flight = this.findObjectById(45000);
  console.log(this.flight);
  
  }
}


