import { Component, OnInit } from '@angular/core';
import { ScheduleflightService } from '../../services/scheduleflight.service';
import { Scheduledflight } from '../../entities/scheduledflight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduledflight-list',
  templateUrl: './scheduledflight-list.component.html',
  styleUrl: './scheduledflight-list.component.css'
})
export class ScheduledflightListComponent implements OnInit{
  
  schflights !: Scheduledflight[]; 

  searchText : string = '';

  constructor(private scheduleflightservice : ScheduleflightService, private router : Router){}

  ngOnInit(): void {

    this.getscheduledflights();
  }

  getscheduledflights() {
    this.scheduleflightservice.getscheduledflights().subscribe(data => {
      this.schflights = data
    })
  }
  
}
