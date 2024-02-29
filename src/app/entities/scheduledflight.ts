import { Flight } from "./flight";
import { Schedule } from "./schedule";

export class Scheduledflight {

    scheduledid !: number;
    schedule !: Schedule;
    flight !: Flight;
    availableSeats !: number;
}
