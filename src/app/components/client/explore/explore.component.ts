import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryRestService } from 'src/app/services/category/category-rest.service';
import { DepartmentRestService } from 'src/app/services/department/department-rest.service';
import { DestinyRestService } from 'src/app/services/destiny/destiny-rest.service';
import { TripRestService } from 'src/app/services/trip/trip-rest.service';
import { TuristicCenterRestService } from 'src/app/services/turisticCenter/turistic-center-rest.service';
import { UserRestService } from 'src/app/services/user/user-rest.service';
import { environment } from 'src/environments/environment';

import { DestinyModel } from 'src/app/models/destiny.model';

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
    private turisticCenterRest: TuristicCenterRestService,
    private tripRest: TripRestService,
    private destinyRest: DestinyRestService,
    private router: Router
  ) {
    this.destiny = new DestinyModel('', '', '', new Date(), new Date());
  }

  ngOnInit(): void {
    this.getDepartmentsOnlyContributor();
    this.getCategoriesOnlyContributor();
    this.getTuristicsCentersOnlyClient();

    this.today = new Date()
      .toISOString()
      .slice(0, new Date().toISOString().lastIndexOf(':'));
  }

  today: any;

  //* Centros turísticos ---------------------------------------------------------------------------------------

  uri: string = environment.baseUrl + 'turisticCenter/getImageTuristicCenter/';

  searchTuristicCenterName: String = '';
  searchTuristicCenterDepartment: String = '';
  searchTuristicCenterCategory: String = '';

  departments: any;
  categories: any;

  turisticsCenters: any;
  turisticCenterGetId: any;

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

  //* Viajes ---------------------------------------------------------------------------------------
  tripsLenght: any;

  trips: any;
  tripGetData: any;
  tripGetId: any;

  getTrips(turisticCenterId: string) {
    this.turisticCenterGetId = turisticCenterId;
    this.tripRest.getTrips().subscribe({
      next: (res: any) => {
        this.trips = res.trips;
        this.tripsLenght = this.trips.length;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  //* Destinos ---------------------------------------------------------------------------------------
  destiny: DestinyModel;

  getTripId(idTrip: string) {
    this.tripGetId = idTrip;
  }

  addDestiny() {
    this.destinyRest
      .addDestiny(this.destiny, this.tripGetId, this.turisticCenterGetId)
      .subscribe({
        next: (res: any) => {
          Swal.fire({
            title: 'Destino añadido al viaje',
            text: '¿Deseas ir a tus viajes?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#198754',
            cancelButtonColor: '#aaa',
            confirmButtonText: 'Ir a mis viajes',
            cancelButtonText: 'Seguir añadiendo destinos',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('/myTrips');
            }
          });
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'warning',
            title: err.error.message || err.error,
          });
        },
      });
  }
}
