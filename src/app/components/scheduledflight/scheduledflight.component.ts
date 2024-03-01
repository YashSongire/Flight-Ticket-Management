import { Component, OnInit } from '@angular/core';
import { ScheduleflightService } from '../../services/scheduleflight.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../../services/flight.service';
import { Airport } from '../../entities/airport';
import { Flight } from '../../entities/flight';
import { Schedule } from '../../entities/schedule';

@Component({
  selector: 'app-scheduledflight',
  templateUrl: './scheduledflight.component.html',
  styleUrl: './scheduledflight.component.css'
})
export class ScheduledflightComponent implements OnInit{

  length = 5;
  booleanArray = Array.from({ length }, () => false);
  airports: Airport[] = [];
  flights: Flight[] = [];
  schflForm !: FormGroup

  constructor(private schflservice : ScheduleflightService, private fb: FormBuilder, private flservice: FlightService){
    this.schflForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      departures: ['', Validators.required],
      arrivals: ['', Validators.required],
      carrierName: ['' , Validators.required],
      flmodel: ['' , Validators.required],
      seatCapacity:  [null , Validators.required],
      password: ['', Validators.required] 
    })

    }

  ngOnInit(): void {
    this.schflservice.getairports().subscribe(data => { this.airports =  data});
    this.flservice.getflightlist().subscribe(data => { this.flights = data})
  }

  toggleTab(step: number){
    if(step == 1){
      this.booleanArray[step] = !this.booleanArray[step];
    }
    else{
      this.booleanArray[step-1]= !this.booleanArray[step-1];
      this.booleanArray[step] = !this.booleanArray[step];  
    }
    }

  get tabText(): string {
    return this.booleanArray[0]? '-' : '+';
    }


    createscheduleflght(){
  
      const schedule = new Schedule();
      const sourceairport = new Airport();
      const destairport = new Airport();
;
      
    }
  }

