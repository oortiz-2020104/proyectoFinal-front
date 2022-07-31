import { Component, OnInit } from '@angular/core';

import { DepartmentRestService } from 'src/app/services/department/department-rest.service';

import { DepartmentModel } from 'src/app/models/department.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
})
export class DepartmentsComponent implements OnInit {
  constructor(private departmentRest: DepartmentRestService) {
    this.department = new DepartmentModel('', '', '');
  }

  ngOnInit(): void {
    this.getDepartments();
  }

  searchDepartment: String = '';

  department: DepartmentModel;
  departments: any;
  departmentGetData: any;

  addDepartment(addDepartmentForm: any) {
    this.departmentRest.addDepartment(this.department).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
        });
        this.getDepartments();
        addDepartmentForm.reset();
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  getDepartments() {
    this.departmentRest.getDepartments().subscribe({
      next: (res: any) => {
        this.departments = res.departments;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  getDepartment(id: string) {
    this.departmentRest.getDepartment(id).subscribe({
      next: (res: any) => {
        this.departmentGetData = res.department;
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  updateDepartment() {
    this.departmentRest
      .updateDepartment(this.departmentGetData, this.departmentGetData._id)
      .subscribe({
        next: (res: any) => {
          Swal.fire({
            icon: 'success',
            title: res.message,
          });
          this.getDepartments();
        },
        error: (err) => {
          Swal.fire({
            icon: 'warning',
            title: err.error.message || err.error,
          });
        },
      });
  }

  deleteDepartment(id: string) {
    Swal.fire({
      title: '¿Estás seguro de eliminar este departamento?',
      text: '¡Esta acción no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sí, quiero eliminarlo',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.departmentRest.deleteDepartment(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              icon: 'success',
              title: res.message,
            });
            this.getDepartments();
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
