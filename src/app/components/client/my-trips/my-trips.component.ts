import { Component, OnInit } from '@angular/core';

import { TripRestService } from 'src/app/services/trip/trip-rest.service';
import { DestinyRestService } from 'src/app/services/destiny/destiny-rest.service';
import { environment } from 'src/environments/environment';

import { TripModel } from 'src/app/models/trip.model';
import { DestinyModel } from 'src/app/models/destiny.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css'],
})
export class MyTripsComponent implements OnInit {
  constructor(
    private tripRest: TripRestService,
    private destinyRest: DestinyRestService
  ) {
    this.trip = new TripModel('', '', '', new Date(), new Date());
    this.destiny = new DestinyModel('', '', '', new Date(), new Date());
  }

  ngOnInit(): void {
    this.getTrips();

    this.today = new Date()
      .toISOString()
      .slice(0, new Date().toISOString().lastIndexOf(':'));
  }

  today: any;

  //* Viajes ---------------------------------------------------------------------------------------

  searchTrip: String = '';

  trip: TripModel;
  trips: any;
  tripGetData: any;
  tripGetId: any;

  addTrip(addTripForm: any) {
    this.tripRest.addTrip(this.trip).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
        });
        this.getTrips();
        addTripForm.reset();
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  getTrips() {
    this.tripRest.getTrips().subscribe({
      next: (res: any) => {
        this.trips = res.trips;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  getTrip(id: string) {
    this.tripRest.getTrip(id).subscribe({
      next: (res: any) => {
        this.tripGetData = res.trip;
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  updateTrip() {
    this.tripGetData.user = undefined;
    this.tripGetData.startDate = undefined;
    this.tripGetData.endDate = undefined;

    this.tripRest.updateTrip(this.tripGetData, this.tripGetData._id).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
        });
        this.getTrips();
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  deleteTrip(id: string) {
    Swal.fire({
      title: '¿Estás seguro de eliminar este destino?',
      text: '¡Esta acción no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sí, quiero eliminarlo',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.tripRest.deleteTrip(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              icon: 'success',
              title: res.message,
            });
            this.getTrips();
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

  //* Destinos ---------------------------------------------------------------------------------------
  uri: string = environment.baseUrl + 'turisticCenter/getImageTuristicCenter/';
  destiniesLenght: any;

  destiny: DestinyModel;
  destinies: any;
  destinyGetData: any;
  destinyGetId: any;

  getDestinies(idTrip: string) {
    this.tripGetId = idTrip;
    this.destinyRest.getDestinies(idTrip).subscribe({
      next: (res: any) => {
        this.destinies = res.destinies;

        this.destiniesLenght = this.destinies.length;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  getDestiny(idDestiny: string) {
    this.destinyRest.getDestiny(this.tripGetId, idDestiny).subscribe({
      next: (res: any) => {
        this.destinyGetData = res.destiny;
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  updateDestiny() {
    this.destinyGetData.trip = undefined;
    this.destinyGetData.turisticCenter = undefined;

    this.destinyRest
      .updateDestiny(this.destinyGetData, this.tripGetId, this.destinyGetData._id)
      .subscribe({
        next: (res: any) => {
          Swal.fire({
            icon: 'success',
            title: res.message,
          });
          this.getTrips();
          this.getDestinies(this.tripGetId);
        },
        error: (err) => {
          Swal.fire({
            icon: 'warning',
            title: err.error.message || err.error,
          });
        },
      });
  }

  deleteDestiny(idDestiny: string) {
    Swal.fire({
      title: '¿Estás seguro de eliminar este destino?',
      text: '¡Esta acción no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sí, quiero eliminarlo',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.destinyRest.deleteDestiny(this.tripGetId, idDestiny).subscribe({
          next: (res: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Destino eliminado',
            });
            this.getTrips();
            this.getDestinies(this.tripGetId);
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
