import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../user/user-rest.service';

@Injectable({
  providedIn: 'root',
})
export class TuristicCenterRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.userRest.getToken(),
  });

  constructor(private http: HttpClient, private userRest: UserRestService) {}

  //* Administrador ---------------------------------------------------------------------------------------
  getTuristicsCentersOnlyAdmin() {
    return this.http.get(environment.baseUrl + 'turisticCenter/getTuristicsCenters_OnlyAdmin', {
      headers: this.httpOptions,
    });
  }
}
