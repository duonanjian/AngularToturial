import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { StoreService } from 'src/service/store/store.service';
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
    // 这里有问题，初始化storeService的时候token=null，之后点击了之后还是没有触发更新，导致token没有更新
    // 还是null，刷新页面，重载storeService，此时token有值
    this.token = this.storeService.getToken();
    if (this.token) {
      return true;
    } else {
      console.log(this.token);
      return false;
    }
  }
}
