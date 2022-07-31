import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../user/user-rest.service';

@Injectable({
  providedIn: 'root',
})
export class DestinyRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.userRest.getToken(),
  });

  constructor(private http: HttpClient, private userRest: UserRestService) {}

  //* Usuario registrado ---------------------------------------------------------------------------------------
  addDestiny(params: {}, idTrip: string, idTuristicCenter: string) {
    return this.http.post(
      environment.baseUrl + `destiny/addDestiny/${idTrip}/${idTuristicCenter}`,
      params,
      {
        headers: this.httpOptions,
      }
    );
  }

  getDestinies(idTrip: string) {
    return this.http.get(
      environment.baseUrl + `destiny/getDestinies/${idTrip}`,
      {
        headers: this.httpOptions,
      }
    );
  }

  getDestiny(idTrip: string, idDestiny: string) {
    return this.http.get(
      environment.baseUrl + `destiny/getDestiny/${idTrip}/${idDestiny}`,
      {
        headers: this.httpOptions,
      }
    );
  }

  updateDestiny(params: {}, idTrip: string, idDestiny: string) {
    return this.http.put(
      environment.baseUrl + `destiny/updateDestiny/${idTrip}/${idDestiny}`,
      params,
      {
        headers: this.httpOptions,
      }
    );
  }

  deleteDestiny(idTrip: string, idDestiny: string) {
    return this.http.delete(
      environment.baseUrl + `destiny/deleteDestiny/${idTrip}/${idDestiny}`,
      {
        headers: this.httpOptions,
      }
    );
  }
}
