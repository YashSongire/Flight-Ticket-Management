import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Airport } from '../../entities/airport';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleflightService } from '../../services/scheduleflight.service';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrl: './airport-list.component.css'
})
export class AirportListComponent {

  @Output() formSubmitted = new EventEmitter<any>();
  airports !: Airport[]
  airportForm !: FormGroup;
  schdata !: FormGroup;
  newdata : boolean = false;


  constructor(private scheduleservice : ScheduleflightService, private fb: FormBuilder, private cdr : ChangeDetectorRef){
    this.airportForm = this.fb.group({
      airportname: ['', Validators.required],
      airportlocation: ['', Validators.required],
      airportcode: ['', Validators.required]
    });
    this.schdata = this.fb.group({
      source: ['',Validators.required],
      destination : ['', Validators.required]
    })
  }

    display(){
      this.newdata = !this.newdata;
    }

    createairport(){
      if (this.airportForm.valid) {
        // Call your service to store the values
        this.newdata = !this.newdata;
        const airportdata = [this.airportForm.value];
        console.log(this.airportForm.value); 
        this.scheduleservice.createairports(airportdata)
          .subscribe(data => {
            alert("Airport Added to the Database, Now Select it For Source/Destination")           
          });
          this.cdr.detectChanges();
      }
    }
}
