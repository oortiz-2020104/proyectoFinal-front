import { Component, OnInit } from '@angular/core';

import { CategoryRestService } from 'src/app/services/category/category-rest.service';
import { DepartmentRestService } from 'src/app/services/department/department-rest.service';
import { TuristicCenterRestService } from 'src/app/services/turisticCenter/turistic-center-rest.service';
import { UserRestService } from 'src/app/services/user/user-rest.service';
import { environment } from 'src/environments/environment';

import { TuristicCenterModel } from 'src/app/models/turisticCenter.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-contributions',
  templateUrl: './my-contributions.component.html',
  styleUrls: ['./my-contributions.component.css'],
})
export class MyContributionsComponent implements OnInit {
  constructor(
    private userRest: UserRestService,
    private departmentRest: DepartmentRestService,
    private categoryRest: CategoryRestService,
    private turisticCenterRest: TuristicCenterRestService
  ) {
    this.turisticCenter = new TuristicCenterModel(
      '',
      '',
      '',
      '',
      0,
      0,
      '',
      '',
      ''
    );
  }

  ngOnInit(): void {
    this.getTuristicsCenters();
    this.getDepartmentsOnlyContributor();
    this.getCategoriesOnlyContributor();
  }
  
  uri: string = environment.baseUrl + 'turisticCenter/getImageTuristicCenter/';
  filesToUpload: any;

  searchTuristicCenterName: String = '';
  searchTuristicCenterDepartment: String = '';

  departments: any;
  categories: any;

  turisticCenter: TuristicCenterModel;
  turisticsCenters: any;
  turisticCenterGetId: any;
  turisticCenterGetData: any;


  getDepartmentsOnlyContributor() {
    this.departmentRest.getDepartmentsOnlyContributor().subscribe({
      next: (res: any) => {
        this.departments = res.departments;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  getCategoriesOnlyContributor() {
    this.categoryRest.getCategoriesOnlyContributor().subscribe({
      next: (res: any) => {
        this.categories = res.categories;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  addTuristicCenter(addTuristicCenterForm: any) {
    this.turisticCenterRest.addTuristicCenter(this.turisticCenter).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
        });
        this.getTuristicsCenters();
        addTuristicCenterForm.reset();
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  getTuristicsCenters() {
    this.turisticCenterRest.getTuristicsCenters().subscribe({
      next: (res: any) => {
        this.turisticsCenters = res.turisticsCenters;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  getTuristicCenter(id: string) {
    this.turisticCenterRest.getTuristicCenter(id).subscribe({
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

  updateTuristicCenter() {
    this.turisticCenterGetData.user = undefined;
    this.turisticCenterGetData.popularity = undefined;
    this.turisticCenterGetData.image = undefined;

    this.turisticCenterRest
      .updateTuristicCenter(
        this.turisticCenterGetData,
        this.turisticCenterGetData._id
      )
      .subscribe({
        next: (res: any) => {
          Swal.fire({
            icon: 'success',
            title: res.message,
          });
          this.getTuristicsCenters();
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'warning',
            title: err.error.message || err.error,
          });
        },
      });
  }

  deleteTuristicCenter(id: string) {
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
        this.turisticCenterRest.deleteTuristicCenter(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              icon: 'success',
              title: res.message,
            });
            this.getTuristicsCenters();
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

  getIdTuristicCenter(idTuristicCenter: string) {
    this.turisticCenterGetId = idTuristicCenter;
  }

  filesChange(inputFile: any) {
    this.filesToUpload = <Array<File>>inputFile.target.files;
    console.log(this.filesToUpload);
  }

  uploadImage() {
    this.turisticCenterRest
      .requestFiles(this.turisticCenterGetId, this.filesToUpload, 'image')
      .then((res: any) => {
        let resClear = JSON.parse(res);
        if (!resClear.error) {
          Swal.fire({
            icon: 'success',
            title: resClear.message,
          });
          this.getTuristicsCenters();
        } else {
          Swal.fire({
            icon: 'success',
            title: res,
          });
        }
      });
  }
}
