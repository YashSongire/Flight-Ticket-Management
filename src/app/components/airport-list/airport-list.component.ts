import { Component, OnInit} from '@angular/core';
import { Airport } from '../../entities/airport';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleflightService } from '../../services/scheduleflight.service';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrl: './airport-list.component.css'
})
export class AirportListComponent implements OnInit{

  airports !: Airport[]
  airportForm !: FormGroup;
  newairport : boolean  = false;
  
  constructor(private scheduleservice : ScheduleflightService, private fb: FormBuilder){
    this.airportForm = this.fb.group({
      airportname: ['', Validators.required],
      airportlocation: ['', Validators.required],
      airportcode: ['', Validators.required]
    }
    );
  }
  ngOnInit(): void {
   this.scheduleservice.getairports().subscribe(data => 
    {
      this.airports = data;
    })  
  }

  display(){
    this.newairport = !this.newairport;
    }

    createairport(){
      if (this.airportForm.valid) {
        // Call your service to store the values
        console.log(this.airportForm.value);
        this.airports.push(this.airportForm.value) 
        this.scheduleservice.createairports(this.airports)
          .subscribe(
            );
      }
    }

}
