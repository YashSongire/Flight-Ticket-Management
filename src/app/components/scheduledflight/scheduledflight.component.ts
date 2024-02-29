import { Component, OnInit } from '@angular/core';
import { ScheduleflightService } from '../../services/scheduleflight.service';
import { Scheduledflight } from '../../entities/scheduledflight';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Airport } from '../../entities/airport';
import { Schedule } from '../../entities/schedule';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'app-scheduledflight',
  templateUrl: './scheduledflight.component.html',
  styleUrl: './scheduledflight.component.css'
})
export class ScheduledflightComponent implements OnInit{

  isVisible: boolean = false;
  istimings : boolean = false;
  schflForm !: FormGroup;
  airports !: Airport[];
  flights !: Flight[];
  step : boolean = false;
  step3 : boolean = false;

  constructor(private scheduleservice : ScheduleflightService, private fb: FormBuilder, private flservice : FlightService){
    this.schflForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      departures: ['', Validators.required],
      arrivals: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.flservice.getflightlist().subscribe(data => {
this.flights = data;
    })
  }
  ngAfterViewInit(): void {
    this.scheduleservice.getairports().subscribe(data => {
      this.airports = data
    })
  }

  toggleTab(int :number): void {
    switch(int){
      case 1:
        this.isVisible = !this.isVisible;
      break;
      case 2:
        this.step = !this.step;
        break;
      case 3:
          this.step3 = !this.step3;
          break;
    }
    
  }
  
  get tabText(): string {
    return this.isVisible ? '-' : '+';
  }

    addtimings(){
      this.isVisible= false;
      this.istimings = true;
    }

    SubmitDetails(){
      const schedule = new Schedule();
      const sourceairport = new Airport();
      const destairport = new Airport();
      schedule.dateAndTimeOfDeparture = this.schflForm.get('departures')?.value;
      schedule.dateAndTimeOfArrival = this.schflForm.get('arrivals')?.value;
      sourceairport.airportlocation = this.schflForm.get('source')?.value;
      destairport.airportlocation = this.schflForm.get('destination')?.value;
      schedule.source = sourceairport;
      schedule.destination = destairport;

      const schedules = [schedule];
      console.log(schedules);
      this.scheduleservice.createschedules(schedules).subscribe(data =>
        {
          console.log(data);
          
        } );
      console.log(schedules);
      
    }
}
