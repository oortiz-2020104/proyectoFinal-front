import { Component, OnInit } from '@angular/core';

import { CategoryRestService } from 'src/app/services/category/category-rest.service';
import { DepartmentRestService } from 'src/app/services/department/department-rest.service';
import { TuristicCenterRestService } from 'src/app/services/turisticCenter/turistic-center-rest.service';
import { UserRestService } from 'src/app/services/user/user-rest.service';
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  constructor(
    private userRest: UserRestService,
    private departmentRest: DepartmentRestService,
    private categoryRest: CategoryRestService,
    private turisticCenterRest: TuristicCenterRestService
  ) {}

  ngOnInit(): void {
    this.getDepartmentsOnlyContributor()
    this.getCategoriesOnlyContributor()
    this.getTuristicsCentersOnlyClient()
  }
  
  uri: string = environment.baseUrl + 'turisticCenter/getImageTuristicCenter/';

  searchTuristicCenterName: String = '';
  searchTuristicCenterDepartment: String = '';
  searchTuristicCenterCategory: String = '';

  departments: any;
  categories: any;

  turisticsCenters: any;

  getDepartmentsOnlyContributor() {
    this.departmentRest.getDepartmentsOnlyClient().subscribe({
      next: (res: any) => {
        this.departments = res.departments;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  getCategoriesOnlyContributor() {
    this.categoryRest.getCategoriesOnlyClient().subscribe({
      next: (res: any) => {
        this.categories = res.categories;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  getTuristicsCentersOnlyClient() {
    this.turisticCenterRest.getTuristicsCentersOnlyClient().subscribe({
      next: (res: any) => {
        this.turisticsCenters = res.turisticsCenters;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }
}
