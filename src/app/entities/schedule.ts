import { Airport } from "./airport";

export class Schedule {

    source !: Airport;
    destination !: Airport;
    dateAndTimeOfArrival !: Date;
    dateAndTimeOfDeparture !: Date;
}
