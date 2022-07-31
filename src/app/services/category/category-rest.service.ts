import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../user/user-rest.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.userRest.getToken(),
  });

  constructor(private http: HttpClient, private userRest: UserRestService) {}

  //* Administrador ---------------------------------------------------------------------------------------
  addCategory(params: {}) {
    return this.http.post(
      environment.baseUrl + 'category/addCategory',
      params,
      {
        headers: this.httpOptions,
      }
    );
  }

  getCategories() {
    return this.http.get(environment.baseUrl + 'category/getCategories', {
      headers: this.httpOptions,
    });
  }

  getCategory(idCategory: string) {
    return this.http.get(
      environment.baseUrl + 'category/getCategory/' + idCategory,
      {
        headers: this.httpOptions,
      }
    );
  }

  updateCategory(params: {}, idCategory: string) {
    return this.http.put(
      environment.baseUrl + 'category/updateCategory/' + idCategory,
      params,
      {
        headers: this.httpOptions,
      }
    );
  }

  deleteCategory(idCategory: string) {
    return this.http.delete(
      environment.baseUrl + 'category/deleteCategory/' + idCategory,
      {
        headers: this.httpOptions,
      }
    );
  }

  //* Contribuidor ---------------------------------------------------------------------------------------
  getCategoriesOnlyContributor() {
    return this.http.get(environment.baseUrl + 'category/getCategories_OnlyContributor', {
      headers: this.httpOptions,
    });
  }

  //* Usuario registrado ---------------------------------------------------------------------------------------
  getCategoriesOnlyClient() {
    return this.http.get(environment.baseUrl + 'category/getCategories_OnlyClient', {
      headers: this.httpOptions,
    });
  }

  //* Usuario no registrado ---------------------------------------------------------------------------------------
}
