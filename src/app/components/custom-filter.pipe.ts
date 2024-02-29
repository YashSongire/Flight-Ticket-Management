import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, context: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    switch (context) {
      case 'flights':
        return items.filter(item => this.filterFlight(item, searchText));
      case 'scheduleflights':
        return items.filter(item => this.filterScheduleFlight(item, searchText));
      default:
        return items;
    }
  }

  private filterFlight(flight: any, searchText: string) {
 
    return (flight.carrierName.toLowerCase().includes(searchText.toLowerCase()) 
    || flight.flightModel.toLowerCase().includes(searchText.toLowerCase()));
  }

  private filterScheduleFlight(scheduleFlight: any, searchText: string){
    // Custom logic for filtering schedule flights
    return (scheduleFlight.schedule.source.airportlocation.toLowerCase().includes(searchText.toLowerCase())
    || scheduleFlight.schedule.destination.airportname.toLowerCase().includes(searchText.toLowerCase())
    || scheduleFlight.flight.carrierName.toLowerCase().includes(searchText.toLowerCase()));
  }
}
