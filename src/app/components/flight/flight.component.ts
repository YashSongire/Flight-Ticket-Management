import { Component, EventEmitter, Output } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {
 
  flights !: Flight[]
  flForm !: FormGroup;
  newfl : boolean  = false;
  flightdata = new Flight();

  @Output() newdata = new EventEmitter<Flight>()

  constructor(private flservice : FlightService, private fb: FormBuilder){
    this.flForm = this.fb.group({
      carrierName: ['', Validators.required],
      flightModel: ['', Validators.required],
      seatCapacity: [null, Validators.required]
    })
  }

  display(){
    this.newfl = !this.newfl;
    }


    ngOnInit(): void {
      this.flservice.getflightlist().subscribe(data => {
        this.flights = data;  
      });
    }
    
    createflight(){
      if (this.flForm.valid) {
        // Call your service to store the values
        console.log(this.flForm.value);
        this.flights.push(this.flForm.value) 
        this.flservice.createFlight(this.flights)
          .subscribe( data => {
            this.flightdata = data;
          } );
          
          this.newdata.emit(this.flightdata);
    }
    }

  }