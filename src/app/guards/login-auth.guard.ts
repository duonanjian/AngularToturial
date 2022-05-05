import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { StoreService } from 'src/service/store.service';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthGuard implements CanActivate {
  public token: any;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private storeService: StoreService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.token = this.cookieService.get('token');
    this.token = this.storeService.getToken();
    if (this.token) {
      return true;
    } else {
      return false;
    }
  }
}
