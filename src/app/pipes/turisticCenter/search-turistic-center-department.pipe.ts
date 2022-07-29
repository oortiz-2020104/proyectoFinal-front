import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTuristicCenterDepartment'
})
export class SearchTuristicCenterDepartmentPipe implements PipeTransform {
  transform(turisticsCenters: any, searchTuristicCenter: any) {
    if (searchTuristicCenter == undefined) {
      return turisticsCenters;
    } else {
      return turisticsCenters.filter((turisticCenter: any) => {
        return turisticCenter.department.name.toLowerCase().includes(searchTuristicCenter.toLowerCase());
      });
    }
  }
}
