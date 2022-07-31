import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTrip',
})
export class SearchTripPipe implements PipeTransform {
  transform(trips: any, searchTrip: any) {
    if (searchTrip == undefined) {
      return trips;
    } else {
      return trips.filter((trip: any) => {
        return trip.name.toLowerCase().includes(searchTrip.toLowerCase());
      });
    }
  }
}
