import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { StoreService } from 'src/service/store/store.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  CanActivateChild,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  public token: any;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private storeService: StoreService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUrl = state.url;
    const token = localStorage.getItem('token');
    // 这里有问题，初始化storeService的时候token=null，之后点击了之后还是没有触发更新，导致token没有更新
    // 还是null，刷新页面，重载storeService，此时token有值
    if (currentUrl === '/login' && token) {
      this.router.navigate(['/welcome/basic/monitor']);
      return true;
    } else if (currentUrl === '/login') {
      return true;
    } else {
      // 随时检查token状态
      const token = localStorage.getItem('token');
      if (token) return true;
      this.router.navigate(['/login']);
      return false;
    }
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }
}
