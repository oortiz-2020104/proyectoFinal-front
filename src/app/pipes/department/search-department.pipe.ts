import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDepartment'
})
export class SearchDepartmentPipe implements PipeTransform {
  transform(departments: any, searchDepartment: any) {
    if (searchDepartment == undefined) {
      return departments;
    } else {
      return departments.filter((department: any) => {
        return department.name.toLowerCase().includes(searchDepartment.toLowerCase());
      });
    }
  }
}
