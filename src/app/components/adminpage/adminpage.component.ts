import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrl: './adminpage.component.css'
})
export class AdminpageComponent implements OnInit{

  user !: User;

  constructor(private router : Router ){

}
  ngOnInit(): void {
    const userinfo = sessionStorage.getItem('userData');
    const storedUserData = userinfo ? JSON.parse(userinfo) : null;
    this.user = storedUserData;
    console.log(this.user);
  }

  createscheduleflight(){
    this.router.navigate(['./scheduledflight']);
  }

  getscheduleflights(){
    this.router.navigate(['./scheduledflight-list']);
  }
}
