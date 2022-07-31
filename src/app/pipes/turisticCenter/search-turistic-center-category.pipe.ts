import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTuristicCenterCategory',
})
export class SearchTuristicCenterCategoryPipe implements PipeTransform {
  transform(turisticsCenters: any, searchTuristicCenter: any) {
    if (searchTuristicCenter == undefined) {
      return turisticsCenters;
    } else {
      return turisticsCenters.filter((turisticCenter: any) => {
        return turisticCenter.category.name
          .toLowerCase()
          .includes(searchTuristicCenter.toLowerCase());
      });
    }
  }
}
