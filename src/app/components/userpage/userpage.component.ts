import { Component } from '@angular/core';
import { Scheduledflight } from '../../entities/scheduledflight';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleflightService } from '../../services/scheduleflight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.css'
})
export class UserpageComponent {

  schflight !: Scheduledflight[]; 
  flightForm !: FormGroup;
  showContent: boolean = false;

  constructor(private scheduleflightservice : ScheduleflightService, private fb: FormBuilder, private router : Router){
    this.flightForm = this.fb.group({
      sourceLocation: ['', Validators.required],
      destinationLocation: ['', Validators.required],
      date: [null, Validators.required]
    });
  }
  
  onSubmit() {
    if (this.flightForm.valid) {
      // Call your service to store the values
      const formData = this.flightForm.value;
      this.scheduleflightservice.searchFlights(formData.sourceLocation, formData.destinationLocation, formData.date)
        .subscribe(response => {
          // Handle the response as needed
          console.log('Response:', response);
          this.schflight = response;
          // DIsplay DIv
          this.showContent = !this.showContent;
        });
    }
  }
  onClickNavigate() {
    let login = false;

    if (login) {
      // User Succefully Logged In
      console.log('Functionality 1');
    } else {
      // Functionality 2
      this.router.navigate(['/signin']); // Navigate to Sign In
    }
  }
}

