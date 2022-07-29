import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../user/user-rest.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.userRest.getToken(),
  });

  constructor(private http: HttpClient, private userRest: UserRestService) {}

  //* Administrador ---------------------------------------------------------------------------------------
  addDepartment(params: {}) {
    return this.http.post(
      environment.baseUrl + 'department/addDepartment',
      params,
      {
        headers: this.httpOptions,
      }
    );
  }

  getDepartments() {
    return this.http.get(environment.baseUrl + 'department/getDepartments', {
      headers: this.httpOptions,
    });
  }

  getDepartment(idDepartment: string) {
    return this.http.get(
      environment.baseUrl + 'department/getDepartment/' + idDepartment,
      {
        headers: this.httpOptions,
      }
    );
  }

  updateDepartment(params: {}, idDepartment: string) {
    return this.http.put(
      environment.baseUrl + 'department/updateDepartment/' + idDepartment,
      params,
      {
        headers: this.httpOptions,
      }
    );
  }

  deleteDepartment(idDepartment: string) {
    return this.http.delete(
      environment.baseUrl + 'department/deleteDepartment/' + idDepartment,
      {
        headers: this.httpOptions,
      }
    );
  }
}
