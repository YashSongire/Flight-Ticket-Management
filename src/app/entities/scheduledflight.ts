import { Flight } from "./flight";
import { Schedule } from "./schedule";

export class Scheduledflight {

    scheduleflightid !: number;
    schedule: Schedule = new Schedule();
    flight: Flight = new Flight();
    availableSeats : number = 0;
}
