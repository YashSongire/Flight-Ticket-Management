import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { ScheduledflightComponent } from './components/scheduledflight/scheduledflight.component';
import { ScheduledflightListComponent } from './components/scheduledflight-list/scheduledflight-list.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { AirportListComponent } from './components/airport-list/airport-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { CustomFilterPipe } from './components/custom-filter.pipe';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { TestComponent } from './components/test/test.component';
import { FlightComponent } from './components/flight/flight.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    SigninComponent,
    ScheduledflightComponent,
    ScheduledflightListComponent,
    ScheduleListComponent,
    AirportListComponent,
    AboutComponent,
    CustomFilterPipe,
    AdminpageComponent,
    UserpageComponent,
    TestComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
