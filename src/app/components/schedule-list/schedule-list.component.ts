import {  AfterViewInit, Component } from '@angular/core';
import { Schedule } from '../../entities/schedule';
import { ScheduleflightService } from '../../services/scheduleflight.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Airport } from '../../entities/airport';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrl: './schedule-list.component.css'
})
export class ScheduleListComponent implements AfterViewInit {

  isVisible: boolean = false;
  istimings : boolean = false;
  scheduleForm !: FormGroup;
  airports !: Airport[];
  step : boolean = false;

  constructor(private scheduleservice : ScheduleflightService, private fb: FormBuilder){
    this.scheduleForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      departures: ['', Validators.required],
      arrivals: ['', Validators.required]
    });
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
    }
    
  }

    addtimings(){
      this.isVisible= false;
      this.istimings = true;
    }

    moveforschedule(){
  
      const schedule = new Schedule();
      const sourceairport = new Airport();
      const destairport = new Airport();
      schedule.dateAndTimeOfDeparture = this.scheduleForm.get('departures')?.value;
      schedule.dateAndTimeOfArrival = this.scheduleForm.get('arrivals')?.value;
      sourceairport.airportlocation = this.scheduleForm.get('source')?.value;
      destairport.airportlocation = this.scheduleForm.get('destination')?.value;
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
