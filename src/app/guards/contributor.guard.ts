import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserRestService } from '../services/user/user-rest.service';

@Injectable({
  providedIn: 'root',
})
export class ContributorGuard implements CanActivate {
  constructor(private userRest: UserRestService, public router: Router) {}

  canActivate() {
    if (this.userRest.getIdentity().role === 'CONTRIBUTOR') {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
