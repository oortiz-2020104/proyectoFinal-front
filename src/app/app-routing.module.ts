import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './components/admin/categories/categories.component';
import { DepartmentsComponent } from './components/admin/departments/departments.component';
import { TuristicsCentersComponent } from './components/admin/turistics-centers/turistics-centers.component';
import { UsersComponent } from './components/admin/users/users.component';
import { ExploreComponent } from './components/client/explore/explore.component';
import { MyTripsComponent } from './components/client/my-trips/my-trips.component';
import { MyContributionsComponent } from './components/contributor/my-contributions/my-contributions.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';

import { AdminGuard } from './guards/admin.guard';
import { ClientGuard } from './guards/client.guard';
import { ContributorGuard } from './guards/contributor.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myProfile', component: MyProfileComponent },
  {
    path: 'myTrips',
    canActivate: [ClientGuard],
    component: MyTripsComponent,
  },
  {
    path: 'explore',
    canActivate: [ClientGuard],
    component: ExploreComponent,
  },
  {
    path: 'contributor/myContributions',
    canActivate: [ContributorGuard],
    component: MyContributionsComponent,
  },
  {
    path: 'admin/users',
    canActivate: [AdminGuard],
    component: UsersComponent,
  },
  {
    path: 'admin/turisticsCenters',
    canActivate: [AdminGuard],
    component: TuristicsCentersComponent,
  },
  {
    path: 'admin/departments',
    canActivate: [AdminGuard],
    component: DepartmentsComponent,
  },
  {
    path: 'admin/categories',
    canActivate: [AdminGuard],
    component: CategoriesComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
