import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTuristicCenterName',
})
export class SearchTuristicCenterNamePipe implements PipeTransform {
  transform(turisticsCenters: any, searchTuristicCenter: any) {
    if (searchTuristicCenter == undefined) {
      return turisticsCenters;
    } else {
      return turisticsCenters.filter((turisticCenter: any) => {
        return turisticCenter.name.toLowerCase().includes(searchTuristicCenter.toLowerCase());
      });
    }
  }
}
