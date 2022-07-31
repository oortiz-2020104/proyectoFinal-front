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
  //* Contribuidor ---------------------------------------------------------------------------------------
  addTuristicCenter(params: {}) {
    return this.http.post(
      environment.baseUrl + 'turisticCenter/addTuristicCenter',
      params,
      {
        headers: this.httpOptions,
      }
    );
  }

  getTuristicsCenters() {
    return this.http.get(
      environment.baseUrl + 'turisticCenter/getTuristicsCenters',
      {
        headers: this.httpOptions,
      }
    );
  }

  getTuristicCenter(idTuristicCenter: string) {
    return this.http.get(
      environment.baseUrl +
        'turisticCenter/getTuristicCenter/' +
        idTuristicCenter,
      {
        headers: this.httpOptions,
      }
    );
  }

  updateTuristicCenter(params: {}, idTuristicCenter: string) {
    return this.http.put(
      environment.baseUrl +
        'turisticCenter/updateTuristicCenter/' +
        idTuristicCenter,
      params,
      {
        headers: this.httpOptions,
      }
    );
  }

  deleteTuristicCenter(idTuristicCenter: string) {
    return this.http.delete(
      environment.baseUrl +
        'turisticCenter/deleteTuristicCenter/' +
        idTuristicCenter,
      {
        headers: this.httpOptions,
      }
    );
  }

  requestFiles(idTuristicCenter: string, files: Array<File>, name: string) {
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      let uri =
        environment.baseUrl +
        'turisticCenter/uploadImageTuristicCenter/' +
        idTuristicCenter;

      for (var x = 0; x < files.length; x++) {
        formData.append(name, files[x], files[x].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', uri, true);
      xhr.setRequestHeader('Authorization', this.userRest.getToken());
      xhr.send(formData);
    });
  }

  //* Administrador ---------------------------------------------------------------------------------------
  getTuristicsCentersOnlyAdmin() {
    return this.http.get(
      environment.baseUrl + 'turisticCenter/getTuristicsCenters_OnlyAdmin',
      {
        headers: this.httpOptions,
      }
    );
  }

  getTuristicCenterOnlyAdmin(idTuristicCenter: string) {
    return this.http.get(
      environment.baseUrl +
        'turisticCenter/getTuristicCenter_OnlyAdmin/' +
        idTuristicCenter,
      {
        headers: this.httpOptions,
      }
    );
  }

  updateTuristicCenterOnlyAdmin(params: {}, idTuristicCenter: string) {
    return this.http.put(
      environment.baseUrl +
        'turisticCenter/updateTuristicCenter_OnlyAdmin/' +
        idTuristicCenter,
      params,
      {
        headers: this.httpOptions,
      }
    );
  }

  deleteTuristicCenterOnlyAdmin(idTuristicCenter: string) {
    return this.http.delete(
      environment.baseUrl +
        'turisticCenter/deleteTuristicCenter_OnlyAdmin/' +
        idTuristicCenter,
      {
        headers: this.httpOptions,
      }
    );
  }

  //* Usuario registrado ---------------------------------------------------------------------------------------
  getTuristicsCentersOnlyClient() {
    return this.http.get(
      environment.baseUrl + 'turisticCenter/getTuristicsCenters_OnlyClient',
      {
        headers: this.httpOptions,
      }
    );
  }

  //* Usuario no registrado ---------------------------------------------------------------------------------------
}
