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

  routeto(id:number){
    switch(id){
      case 1:
        this.router.navigate(['/scheduledflight']);
        break;
      case 2:
        this.router.navigate(['/userpage']);
        break;
       case 3:
        this.router.navigate(['/scheduledflight-list']);
        break;
        case 4:
        this.router.navigate(['/userpage']);
        break;
      default:
        this.router.navigate(['/adminpage']);
    }
  }
}
