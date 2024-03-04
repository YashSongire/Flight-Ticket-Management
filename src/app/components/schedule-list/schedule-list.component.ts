import { Component, EventEmitter, Output } from '@angular/core';
import { ScheduleflightService } from '../../services/scheduleflight.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Schedule } from '../../entities/schedule';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrl: './schedule-list.component.css'
})
export class ScheduleListComponent {

  scheduleForm !: FormGroup;
  newschedule : boolean  = false;
  obj1 = {  };
  @Output() newdata = new EventEmitter<Schedule>()

  constructor(private scheduleservice : ScheduleflightService, private fb: FormBuilder){
    this.scheduleForm = this.fb.group({
      departures: ['', Validators.required],
      arrivals: ['', Validators.required]
    });
  }

  toggleTab(){
    this.newschedule = !this.newschedule;
    }

  onScheduleSubmitted(data: any){
    this.obj1 =data;
  }

  get tabText(){
    return this.newschedule ? "-" : "+";
  }

    moveforschedule(){
  
      if (this.scheduleForm.valid) {
        this.newschedule = !this.newschedule;
        let mergeobj = {...this.scheduleForm.value ,... this.obj1}
        console.log(mergeobj);
        this.newdata.emit(mergeobj);
      }
      
    }
}
