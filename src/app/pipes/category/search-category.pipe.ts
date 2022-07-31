import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCategory',
})
export class SearchCategoryPipe implements PipeTransform {
  transform(categories: any, searchCategory: any) {
    if (searchCategory == undefined) {
      return categories;
    } else {
      return categories.filter((category: any) => {
        return category.name
          .toLowerCase()
          .includes(searchCategory.toLowerCase());
      });
    }
  }
}
