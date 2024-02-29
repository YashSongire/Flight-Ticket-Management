import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../entities/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  user !: User[]; 
  flightForm !: FormGroup;
  userid !: number; 

  constructor(private userservice : UserService, private fb: FormBuilder, private router : Router){
    this.flightForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      typeofuser: ['', Validators.required]
    });
  }

  signin(){
    if (this.flightForm.valid) {
      // Call your service to store the values
      const formData = this.flightForm.value;
      this.userservice.signin(formData.username, formData.password, formData.typeofuser)
        .subscribe(response => {
          // Handle the response as needed
          console.log('Response:', response);
          this.user = response;
          sessionStorage.setItem('userData', JSON.stringify(this.user));
          if(formData.typeofuser == 'Admin'){
            this.router.navigate(['/adminpage']);
          }
          else {
            this.router.navigate(['/userpage']);
          }
        });
    }
  }
}
