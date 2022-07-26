import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../user/user-rest.service';

@Injectable({
  providedIn: 'root',
})
export class TripRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.userRest.getToken(),
  });

  constructor(private http: HttpClient, private userRest: UserRestService) {}

  //* Usuario registrado ---------------------------------------------------------------------------------------
  addTrip(params: {}) {
    return this.http.post(
      environment.baseUrl + 'trip/addTrip',
      params,
      {
        headers: this.httpOptions,
      }
    );
  }

  getTrips() {
    return this.http.get(environment.baseUrl + 'trip/getTrips', {
      headers: this.httpOptions,
    });
  }

  getTrip(idTrip: string) {
    return this.http.get(
      environment.baseUrl + 'trip/getTrip/' + idTrip,
      {
        headers: this.httpOptions,
      }
    );
  }

  updateTrip(params: {}, idTrip: string) {
    return this.http.put(
      environment.baseUrl + 'trip/updateTrip/' + idTrip,
      params,
      {
        headers: this.httpOptions,
      }
    );
  }

  deleteTrip(idTrip: string) {
    return this.http.delete(
      environment.baseUrl + 'trip/deleteTrip/' + idTrip,
      {
        headers: this.httpOptions,
      }
    );
  }
}
