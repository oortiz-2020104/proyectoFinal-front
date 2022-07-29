import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TuristicsCentersComponent } from './components/admin/turistics-centers/turistics-centers.component';
import { UsersComponent } from './components/admin/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';

import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myProfile', component: MyProfileComponent },
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

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
