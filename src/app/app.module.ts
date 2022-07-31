import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { UsersComponent } from './components/admin/users/users.component';
import { TuristicsCentersComponent } from './components/admin/turistics-centers/turistics-centers.component';
import { SearchUserPipe } from './pipes/user/search-user.pipe';
import { SearchTuristicCenterNamePipe } from './pipes/turisticCenter/search-turistic-center-name.pipe';
import { SearchTuristicCenterDepartmentPipe } from './pipes/turisticCenter/search-turistic-center-department.pipe';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { DepartmentsComponent } from './components/admin/departments/departments.component';
import { SearchCategoryPipe } from './pipes/category/search-category.pipe';
import { SearchDepartmentPipe } from './pipes/department/search-department.pipe';
import { MyContributionsComponent } from './components/contributor/my-contributions/my-contributions.component';
import { ExploreComponent } from './components/client/explore/explore.component';
import { SearchTuristicCenterCategoryPipe } from './pipes/turisticCenter/search-turistic-center-category.pipe';
import { MyTripsComponent } from './components/client/my-trips/my-trips.component';
import { SearchTripPipe } from './pipes/trip/search-trip.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotFoundComponent,
    MyProfileComponent,
    UsersComponent,
    TuristicsCentersComponent,
    SearchUserPipe,
    SearchTuristicCenterNamePipe,
    SearchTuristicCenterDepartmentPipe,
    CategoriesComponent,
    DepartmentsComponent,
    SearchCategoryPipe,
    SearchDepartmentPipe,
    MyContributionsComponent,
    ExploreComponent,
    SearchTuristicCenterCategoryPipe,
    MyTripsComponent,
    SearchTripPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
