import { Component, OnInit } from '@angular/core';
import { ScheduleflightService } from '../../services/scheduleflight.service';
import { Scheduledflight } from '../../entities/scheduledflight';
import { Schedule } from '../../entities/schedule';
import { FlightService } from '../../services/flight.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from '../../entities/flight';
import { Airport } from '../../entities/airport'
import html2pdf from 'html2pdf.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scheduledflight',
  templateUrl: './scheduledflight.component.html',
  styleUrl: './scheduledflight.component.css'
})
export class ScheduledflightComponent implements OnInit{
  
  Schedulefl = new Schedule();
  Scheduleflight = new Scheduledflight();
  schflights !: Scheduledflight[];
  SchflForm !: FormGroup;
  flights !: Flight[];
  airports !: Airport[];
  visible : boolean = false;

  constructor(private schflservice : ScheduleflightService, private flservice : FlightService, private fb: FormBuilder,
    private route : Router){
    this.SchflForm = this.fb.group({
      source : ['', Validators.required],
      destination : ['', Validators.required],
      departures : ['', Validators.required],
      arrivals: ['', Validators.required],
      flightId : [null,Validators.required],
    })
    }

  ngOnInit(): void {
    this.flservice.getflightlist().subscribe(data => { this.flights = data});
    this.schflservice.getairports().subscribe(data => { this.airports = data});
  }
      

  createScheduleFlight(){
    this.Schedulefl.source.airportlocation = this.SchflForm.get("source")?.value;
    this.Schedulefl.destination.airportlocation = this.SchflForm.get("destination")?.value;
    this.Schedulefl.dateAndTimeOfArrival = this.SchflForm.get("arrivals")?.value;
    this.Schedulefl.dateAndTimeOfDeparture = this.SchflForm.get("departures")?.value;
    this.Scheduleflight.flight.flightId = this.SchflForm.get("flightId")?.value;
    this.Scheduleflight.schedule = this.Schedulefl;
    const tickets = this.flights.find(obj1 => obj1.flightId === this.SchflForm.get("flightId")?.value) || new Flight;
    console.log(tickets?.seatCapacity);
    this.Scheduleflight.availableSeats = tickets?.seatCapacity;
    console.log(this.Scheduleflight);
    const scharray = [this.Scheduleflight]
    this.schflservice.createscheduleflights(scharray).subscribe(data => 
      {
        this.schflights = data;
        console.log(data);
        
      })
      this.visible = !this.visible;
      alert("Successfully Added")
  }


  generatePDF(){
      // Get the element to be converted to PDF
      const element = document.getElementById('contentToConvert');
  
      // Use html2pdf library to generate PDF
      html2pdf(element);
  }

  GoBackToAdmin(){
    this.route.navigate(['./adminpage']);
  }
  }
