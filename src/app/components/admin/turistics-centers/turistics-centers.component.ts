import { Component, OnInit } from '@angular/core';

import { CategoryRestService } from 'src/app/services/category/category-rest.service';
import { DepartmentRestService } from 'src/app/services/department/department-rest.service';
import { TuristicCenterRestService } from 'src/app/services/turisticCenter/turistic-center-rest.service';
import { UserRestService } from 'src/app/services/user/user-rest.service';
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-turistics-centers',
  templateUrl: './turistics-centers.component.html',
  styleUrls: ['./turistics-centers.component.css'],
})
export class TuristicsCentersComponent implements OnInit {
  constructor(
    private userRest: UserRestService,
    private departmentRest: DepartmentRestService,
    private categoryRest: CategoryRestService,
    private turisticCenterRest: TuristicCenterRestService
  ) {}

  uri: string = environment.baseUrl + 'turisticCenter/getImageTuristicCenter/';

  searchTuristicCenterName: String = '';
  searchTuristicCenterDepartment: String = '';

  departments: any;
  categories: any;

  turisticsCenters: any;
  turisticCenterGetId: any;
  turisticCenterGetData: any;

  labelFilter: any;

  ngOnInit(): void {
    this.getTuristicsCentersOnlyAdmin();
    this.getDepartmentsOnlyAdmin();
    this.getCategoriesOnlyAdmin();
  }

  getDepartmentsOnlyAdmin() {
    this.departmentRest.getDepartments().subscribe({
      next: (res: any) => {
        this.departments = res.departments;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  getCategoriesOnlyAdmin() {
    this.categoryRest.getCategories().subscribe({
      next: (res: any) => {
        this.categories = res.categories;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  getTuristicsCentersOnlyAdmin() {
    this.turisticCenterRest.getTuristicsCentersOnlyAdmin().subscribe({
      next: (res: any) => {
        this.turisticsCenters = res.turisticsCenters;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  getTuristicCenterOnlyAdmin(id: string) {
    this.turisticCenterRest.getTuristicCenterOnlyAdmin(id).subscribe({
      next: (res: any) => {
        this.turisticCenterGetData = res.turisticCenter;
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: 'Error al obtener el centro turístico',
        });
      },
    });
  }

  updateTuristicCenterOnlyAdmin() {
    this.turisticCenterGetData.user = undefined;
    this.turisticCenterGetData.popularity = undefined;
    this.turisticCenterGetData.image = undefined;

    this.turisticCenterRest
      .updateTuristicCenterOnlyAdmin(
        this.turisticCenterGetData,
        this.turisticCenterGetData._id
      )
      .subscribe({
        next: (res: any) => {
          Swal.fire({
            icon: 'success',
            title: res.message,
          });
          this.getTuristicsCentersOnlyAdmin();
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'warning',
            title: err.error.message || err.error,
          });
        },
      });
  }

  deleteTuristicCenterOnlyAdmin(id: string) {
    Swal.fire({
      title: '¿Estás seguro de eliminar este centro turístico?',
      text: '¡Esta acción no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sí, quiero eliminarlo',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.turisticCenterRest.deleteTuristicCenterOnlyAdmin(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              icon: 'success',
              title: res.message,
            });
            this.getTuristicsCentersOnlyAdmin();
          },
          error: (err: any) => {
            Swal.fire({
              icon: 'warning',
              title: err.error.message || err.error,
            });
          },
        });
      }
    });
  }
}
