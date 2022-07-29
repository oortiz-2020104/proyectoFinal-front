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
    SearchTuristicCenterDepartmentPipe
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
