import { Airport } from "./airport";

export class Schedule {

    source: Airport = new Airport();
    destination: Airport = new Airport();
    dateAndTimeOfArrival : Date = new Date();
    dateAndTimeOfDeparture: Date = new Date();

}
