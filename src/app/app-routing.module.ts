import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { SigninComponent } from './components/signin/signin.component';
import { ScheduledflightComponent } from './components/scheduledflight/scheduledflight.component';
import { ScheduledflightListComponent } from './components/scheduledflight-list/scheduledflight-list.component';
import { AboutComponent } from './components/about/about.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { AirportListComponent } from './components/airport-list/airport-list.component';
import { TestComponent } from './components/test/test.component';
import { FlightComponent } from './components/flight/flight.component';

const routes: Routes = [
  { path : 'flights', component : FlightListComponent},
  { path : 'signin', component : SigninComponent},
  { path : 'scheduledflight', component : ScheduledflightComponent},
  { path : 'scheduledflight-list', component : ScheduledflightListComponent},
  { path : 'about', component : AboutComponent},
  { path : 'adminpage', component : AdminpageComponent},
  { path : 'userpage', component : UserpageComponent},
  {path : 'schedule', component : ScheduleListComponent},
  {path : 'airport', component : AirportListComponent},
  {path : 'flight', component : FlightComponent},
  {path : 'test', component : TestComponent},
  {path : '', redirectTo: 'scheduledflight-list', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
