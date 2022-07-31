import { Component, OnInit } from '@angular/core';

import { CategoryRestService } from 'src/app/services/category/category-rest.service';

import { CategoryModel } from 'src/app/models/category.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryRest: CategoryRestService) {
    this.category = new CategoryModel('', '', '');
  }

  ngOnInit(): void {
    this.getCategories();
  }

  searchCategory: String = '';

  category: CategoryModel;
  categories: any;
  categoryGetData: any;

  addCategory(addCategoryForm: any) {
    this.categoryRest.addCategory(this.category).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
        });
        this.getCategories();
        addCategoryForm.reset();
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  getCategories() {
    this.categoryRest.getCategories().subscribe({
      next: (res: any) => {
        this.categories = res.categories;
      },
      error: (err: any) => {
        console.log(err.error.message);
      },
    });
  }

  getCategory(id: string) {
    this.categoryRest.getCategory(id).subscribe({
      next: (res: any) => {
        this.categoryGetData = res.category;
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  updateCategory() {
    this.categoryRest
      .updateCategory(this.categoryGetData, this.categoryGetData._id)
      .subscribe({
        next: (res: any) => {
          Swal.fire({
            icon: 'success',
            title: res.message,
          });
          this.getCategories();
        },
        error: (err) => {
          Swal.fire({
            icon: 'warning',
            title: err.error.message || err.error,
          });
        },
      });
  }

  deleteCategory(id: string) {
    Swal.fire({
      title: '¿Estás seguro de eliminar esta categoría?',
      text: '¡Esta acción no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sí, quiero eliminarla',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryRest.deleteCategory(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              icon: 'success',
              title: res.message,
            });
            this.getCategories();
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
