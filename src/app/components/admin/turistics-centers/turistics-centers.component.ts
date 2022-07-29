import { Component, OnInit } from '@angular/core';

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
    private turisticCenterRest: TuristicCenterRestService
  ) {}

  uri: string = environment.baseUrl + 'turisticCenter/getImageTuristicCenter/';

  searchTuristicCenter: String = '';

  users: any;

  turisticsCenters: any;
  turisticCenterGetId: any;
  turisticCenterGetData: any;

  labelFilter: any;

  ngOnInit(): void {
    this.getTuristicsCentersOnlyAdmin();
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
}
